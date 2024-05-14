// [1. 공공데이터포털 데이터 가져오기]
// 공공데이터포털 -> 데이터신청 -> 인증키설정 -> open api 호출 -> Request URL 복붙

// [2. 외부에서 노출이 안되도록 환경변수 설정하기]
// url 너무 길면 잘라서 백틱문자열로 표현가능
// 최상위루트에 .env파일 만들기
// .env 파일에 serviceKey명 = '~' 복붙 & .gitignore 파일에 .env 파일추가
// 환경변수명은 반드시 REACT_APP_으로 시작
// serviceKey 가져오려면 process.env.서비스키명

// [3. fetch API : HTTP 요청을 보내고 응답을 받는 기능을 제공]
// fetch 성공하면 .then 실행 / 실패하면 .catch 실행

import { useEffect,useState } from "react";
import ButtonC from "../UI/ButtonC";

export default function TrafficMain() {
    // let tdata; // 전역에서 변수를 쓰고 싶으니까 밖에서 선언 (근데 대분류를 만들려면 tdata받아야하니까 state변수 써야하니까)
    const [tdata, setTdata] = useState([]); // 전체 fetch 데이터
    // const [c1, setC1] = useState([]); 라고 하면 배열로 초깃값을 주겠다는 뜻 -> if (!c1) return ; 오류
    const [c1, setC1] = useState(); // 대분류 // 이렇게해야 undefined로 인식함
    const [c1Tag, setC1Tag] = useState(); // 대분류 버튼
    const [c1Sel, setC1Sel] = useState(); // 선택된 대분류

    const [c2, setC2] = useState(); // 중분류 // 이렇게해야 undefined로 인식함
    const [c2Tag, setC2Tag] = useState(); // 중분류 버튼
    const [c2Sel, setC2Sel] = useState(); // 선택된 중분류

    const [info, setInfo] = useState(); // 선택된 상세자료

    // 대분류를 선택할 때 실행되는 함수 정의
    const handleC1Select = (item) => {
        setC1Sel(item);
    };

    // 중분류를 선택할 때 실행되는 함수 정의
    const handleC2Select = (item) => {
        setC2Sel(item);
    };

    // fetch 함수로 데이터 가져오기
    const getFetchData = (url)=>{
        fetch(url) // (fetch(요청)를 던지고 다른일을 함 = 비동기방식)
        .then(resp=>resp.json()) // json파일로 바꿔줘야함, 갔다가 오면 다음것 실행
        // .then(data=>console.log(data)) // 이 data 중에 data만 가져올 것
        // .then(data=>console.log(data.data)) // 근데 state변수 가져와야하니까
        .then(data=>setTdata(data.data))
        .catch(err=>console.log(err)) // 오류잡으려면 catch 사용
    }

    // useEffect(()=>{}) 화면 변경되면(=아무 state 변수가 변경되면) (호출을 안해도 실행됨)
    useEffect(()=>{
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
        url = `${url}page=1&perPage=17&returnType=JSON`;
        url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;
        console.log(url)
        getFetchData(url);
    },[]); // []안에는 컴포넌트 생성 시 한번만 실행

    // tdata가 변경되면 실행
    useEffect(()=>{
        if (tdata.length===0) return ; // return은 함수를 종료시킴
        console.log("tdata=",tdata)
        let tm = tdata.map(item=>item['사고유형_대분류']) // tdata가 fetch하고 난 후 바뀌면 가져옴
        tm=[...new Set(tm)];
        setC1(tm);
    },[tdata]);

    // 대분류 생성 후
    useEffect(()=>{
        if (!c1) return ;
        console.log('c1=',c1)
        let tm = c1.map((item)=><ButtonC caption={item}
                                        key ={item}
                                        bcolor={'blue'}
                                        handleClick={()=>handleC1Select(item)}/>)

    setC1Tag(tm);
    },[c1]);

    // 대분류 선택 후 중분류만들기 (골라내는거니까 filter)
    useEffect(()=>{
        console.log("대분류선택 :", c1Sel)
        let tm = tdata.filter(item=>item['사고유형_대분류']===c1Sel)
                      .map(item=>item['사고유형_중분류']);
        setC2(tm) ;
    },[c1Sel])

    // 중분류가 만들어졌을 때
    useEffect(()=>{
        if (!c2) return ;
        console.log('c2=',c2)

        let tm = c2.map((item)=><ButtonC caption={item}
                                        key ={item}
                                        bcolor={'blue'}
                                        handleClick={()=>handleC2Select(item)}/>)
    setC2Tag(tm) ;
    },[c2])

    // 중분류 선택 => 상세정보
    useEffect(()=>{
        console.log("대분류선택 :", c1Sel)
        console.log("중분류선택 :", c2Sel)

        let tm = tdata.filter(item=>item['사고유형_대분류']===c1Sel &&
                                    item['사고유형_중분류']===c2Sel)
        tm=tm[0];
        console.log('상세 :',tm)
        setInfo(tm['사고건수']) // object로 풀리도록
    },[c2Sel])

    return (
    <div className='flex flex-col w-10/12 h-full justify-start items-start m-5 p-5'>
        {/* justify-between 양쪽으로 가르기 */}
        <div className='w-full flex justify-between items-center my-10'>
            <div className="w-1/4 justify-start items-center">교통사고 대분류</div>
            <div className="w-3/4 flex">
                {c1Tag}
            </div>
        </div>
        <div className='w-full flex justify-between items-center my-10'>
            <div className="w-1/4 justify-start items-center">교통사고 중분류</div>
            <div className="w-3/4 flex">
                {c2Tag}
            </div>
        </div>
        <div className='w-full flex justify-between items-center my-10'>
            사고건수 : {parseInt(info).toLocaleString()}
        </div>
    </div>
  )
}
