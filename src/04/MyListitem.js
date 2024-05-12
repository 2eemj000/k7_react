// function 함수명(){return} 형태
// useState는 변수값을 바꾸기 위해 두개의 값을 제어함 (cnt,setCnt), setCnt는 cnt에 값을 할당하는 세터, 0은 초기값

// 리액트에서는 하나의 컴포넌트에서 다른 컴포넌트로 (부모 컴포넌트에서 자식 컴포넌트(들)로)데이터를 전달할 때 props를 사용

// HOOK : useEffect # 방법알기 1~2
// # useEffect 1. useEffect 적어줌
import { useState, useEffect } from "react"
export default function MyListitem({title, imgUrl, content}) {
  // 값 두개, handleClick 함수 정의
  const [cnt,setCnt] = useState(0); 
  const handleClick =()=>{
    // cnt=cnt+1 (X) 아래처럼 세터값을 바꿔야함
    setCnt(cnt+1);
    // setCnt로 바꾸는동안 cnt값을 띄워줘서 1작은값으로 console 찍힘 (비동기방식)
    // ---> 그래서 useEffect라는 HOOK 사용 (4번줄)
    console.log(title, 'cnt = ', cnt);
  }

  // # useEffect 2. 함수식 작성 (아래 둘다 가능)
  // useEffect(()=>{});
  // useEffect(()=>{},[]);

  // useEffect(()=>{
  //   // mount
  //   컴포넌트가 생길 때 수행 작업
  //   return{ // cleanup
  //   // unmount
  //   컴포넌트가 사라질 때 수행 작업
  //   }
  // },[deps 의존되는 값들]);

  // deps 의존되는 값들이 비어있다면 컴포넌트가 처음 화면에 나타날 때만 useEffect에 등록한 함수가 실행
  // deps 배열에다 어떤 값을 넣게 된다면 해당 값이 바뀔 때마다 등록한 함수가 호출

  // ~ [1] 컴포넌트 생성시 최초 한번만 실행 (deps에 빈배열)
  useEffect(()=>{
    console.log(title,'생성');
  }, []);

  // ~ [2] state변수가 변경 (지정한 값이 업데이트될 때 useEffect 실행)
  useEffect(()=>{
    console.log(title,'변경 cnt =', cnt);
  },[cnt]);

  // ~ [3] 컴포넌트가 변경되면 항상 실행 (리렌더링 될 때마다 호출)
  useEffect(()=>{
    console.log(title,'변경됨');
  });

  return (
    <div className="flex justify-center items-start p-5 bg-slate-200">
      <div className="flex w-1/3 m-1">
        <img src={imgUrl} alt={title}/>
      </div>
      <div className="flex flex-col justify-between w-2/3 m-5 p-3">
        <div>
            <h1 className="font-bold">{title}</h1>
            <p>{content}</p>
        </div>
        <div className="flex justify-end items-center p-2">
          {/* onClick={handleClick} 내가 만든 함수명써야함 */}
            <span onClick={handleClick}>💗</span>
            <span className="inline-flex mx-2 font-bold">좋아요</span>
            <span className="font-bold">{cnt}</span>
        </div>
      </div>
    </div>
  )
}
