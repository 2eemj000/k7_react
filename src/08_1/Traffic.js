import TrafficNav from "./TrafficNav"
import { useState, useEffect } from "react"
export default function Traffic() {
    const [tdata, setTdata] = useState(); // 전체 fetch데이터 // 계속 바껴야하니까 state변수로
    const [c1,setC1] = useState(); // 대분류데이터
    const [selC1, setSelC1] = useState(); // 선택된 대분류데이터
    const [c2,setC2] = useState(); // 중분류데이터
    const [selC2, setSelC2] = useState(); // 선택된 중분류데이터
    const [info,setInfo] = useState(); // 상세정보
    
    // getFetchData라는 함수 만듦 
    const getFetchData = (a)=>{
        fetch(a) // fetch는 만든거 아니고 js에 원래 있는 함수
        .then(resp=>resp.json())
        .then(data=>setTdata(data.data)) // 이 data 중에 data만 가져올 것, 그걸 tdata 안에 넣으려고 함 => set값에 넣어줘야
        .catch(err=>console.log(err))
    }

    // 컴포넌트 생성 시
    useEffect(()=>{
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
        url = `${url}page=1&perPage=17&returnType=JSON`;
        url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;
        console.log(url)
        // getFetchData라는 함수 만듦 
        getFetchData(url);
    },[]);



////// ---------- 대분류
    // tdata가 변경될 때 = 생성될때, set값이 변경될 때 둘다를 의미
    useEffect(()=>{
        if(!tdata) return // 함수종료 (생성될때는 실행안하고 싶으니까)
        let tm = tdata.map(item=>item['사고유형_대분류']) // 17개 대분류가 뽑아짐
        tm=[...new Set(tm)]; // 집합의 요소목록을 가져와서 새 배열로 만듦 (중복을 제거하는 기능)
        setC1(tm); // 이걸 c1으로 넣어줌
    },[tdata])
        
    // 대분류가 생성되면
    useEffect(()=>{
        if (!tdata || !c1) return
        console.log("c1=",c1)
    },[c1])

    // 대분류를 선택하면 => c2생성
    useEffect(()=>{
        if (!tdata || !c1 || !selC1) return
            ////// ---------- 중분류
        let tm = tdata.filter(item=>item['사고유형_대분류']===selC1)
                      .map(item=>item['사고유형_중분류'])
        setC2(tm)
    },[selC1])

    // 중분류를 선택하면 상세정보
    useEffect(()=>{
        if (!tdata || !c1 || !selC1 || !selC2) return
        let tm = tdata.filter(item=>item['사고유형_대분류']===selC1 &&
                                    item['사고유형_중분류']===selC2) // 이까지만 하면 배열
        tm = tm[0] // 어차피 배열 1개 중에 0번째니까 이걸 열어서 object로 만들어줌
        console.log('상세정보 :',tm)
        const infoKey = ['사고건수','사망자수','중상자수','경상자수','부상신고자수']
        // infoKey만큼 만들어지도록 map돌림 (infoKey만큼 여러개 만들어지니까 key값 있어야)
        tm = infoKey.map(item=> <div key={item} className="flex flex-col"> 
                                    <div className="flex justify-center items-center bg-blue-200 h-8 font-bold">
                                        {item}
                                    </div>
                                    <div className="flex justify-center items-center bg-orange-100 h-10">
                                        {/* {tm[item]} */}
                                        {parseInt(tm[item]).toLocaleString()}
                                    </div>
                                </div>
    )
    setInfo(tm)
    },[selC2])

    return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full flex justify-start items-start">
        {c1 && <TrafficNav // c1 데이터가 있을 때 나타나도록
                    title = '대분류'
                    c={c1}
                    sel={selC1}
                    setSel={setSelC1}/>}
      </div>
      <div className="w-full flex justify-start items-start">
        {c2 && <TrafficNav // c2 데이터가 있을 때 나타나도록
                    title = '중분류'
                    c={c2}
                    sel={selC2}
                    setSel={setSelC2}/>}
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 m-5 gap-3 items-center justify-center">
        {info}
      </div>
    </div>
  )
}
