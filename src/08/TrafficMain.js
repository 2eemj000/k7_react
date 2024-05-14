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
    // let tdata; // 전역에서 변수를 쓰고 싶으니까 밖에서 선언 (근데 변경값 잡으려면 state변수 써야하니까)
    const [tdata, setTdata] = useState([]); // 전체 fetch 데이터
    // const [c1, setC1] = useState([]); 라고 하면 if (!c1) return ; 오류
    const [c1, setC1] = useState(); // 대분류 // 이렇게해야 undefined로 인식함

    const getFetchData = (url)=>{
        fetch(url) // fetch 함수로 데이터 가져오기(fetch(요청)를 던지고 다른일을 함 = 비동기방식)
        .then(resp=>resp.json()) // json파일로 바꿔줘야함, 갔다가 오면 다음것 실행
        // .then(data=>console.log(data)) // 이 data 중에 data만 가져올 것
        // .then(data=>console.log(data.data)) // 근데 state변수 가져와야하니까
        .then(data=>setTdata(data.data))
        .catch(err=>console.log(err)) // 오류잡으려면 catch 사용
    }

    // 컴포넌트 생성 시 한번만 실행
    useEffect(()=>{
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
        url = `${url}page=1&perPage=17&returnType=JSON`;
        url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;
        console.log(url)
        getFetchData(url);
    },[]);

    //tdata가 변경되면 실행
    useEffect(()=>{
        if (tdata.length==0) return ; // return은 함수를 종료시킴

        console.log("tdata=",tdata)
        let tm = tdata.map(item=>item['사고유형_대분류']) // tdata가 fetch하고 난 후 바뀌면 가져옴
        tm=[...new Set(tm)];
        setC1(tm);
    },[tdata]);

    // 대분류 생성 후
    useEffect(()=>{
        if (!c1) return ;
        console.log('c1=',c1)
    }, [c1])

    const c1Bts = c1.map(item=>
        <ButtonC caption={item}
        key ={item}
        bcolor={'blue'}/>
    )

    return (
    <div className='flex flex-col w-full h-full justify-start items-center'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4 my-5 px-2 justify-between items-center'>
            {c1Bts}
        </div>
    </div>
  )
}
