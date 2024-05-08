// HOOK : useState # 방법알기 1~4

import MyDiv2 from "./MyDiv2";
// # useState 1. useState import
import {useState} from "react";


// 단축키 rfc
export default function MyDiv() {
  // @ 변수로 두기
  const dname1 = 'vdiv1';
  const dname2 = 'vdiv2';
  const dname3 = 'vdiv3';
  // # useState 2. state 변수 선언 ()안에는 n은 초기값
  const [n,setN] = useState(0);

  // 변수는 바껴야하니까 let으로 두기
  let cnt = 0;

  // handleCount 함수 만들기
  const handleCount = ()=>{
    cnt=cnt+1;
  // # useState 3. 식 추가하기
    setN(n+1);
    console.log("handleCount = ",cnt);
  }

  return (
      <div className="flex flex-col p-5 m-10 
                      justify-center items-center
                      w-2/3 h-2/3 text-xl bg-blue-400 text-black">
      <div className="w-full h-20 border
                      p-2 m-3
                      flex justify-end items-center">
      <span className="inline-flex p-1 mx-2" onClick={handleCount}> 
      {/* mx는 좌우만 */}
        💗
      </span>
      <span>
        {/* @ 변수쓰고싶으면 중괄호로 묶어야함 */}
        {/* # HOOK : useState 컴포넌트 사용 -> 화면재랜더링 */}
        {/* {cnt} -> 콘솔만 바뀜 */}
        {/* # useState 4. 함수 사용 */}
        {n}
        
      </span>
      </div>
    <div className="w-full">
      {/* @ 변수쓰고싶으면 중괄호로 묶어야함 */}
      {dname1}
      {/* div1 */}
    </div>
    <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3}/>
    {/* MyDiv2에 dn2={dname2}라는 속성을 줄 수 있음, Div2에서 넘겨준 애를 받아줘야함 */}
    </div>
  )
}
