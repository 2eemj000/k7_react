// useState는 화면을 바꿔주고 useEffect는 랜더링 이후 자동으로 실행되는 장치
// 바꾸는 state는 Div1에 있는데, 버튼은 Div3에 있음 (probs 전달)
// recoil은 이렇게 전달전달 안해도되도록 값이 공중에 떠있게 함 (전역변수 관리)
import { AtomN, AtomN2 } from "./AtomN" // 중괄호 안에 들고오기
import { useRecoilValue,useRecoilState } from "recoil"
import RecoilDiv2 from "./RecoilDiv2"
import { useEffect } from "react";

export default function RecoilDiv1() {
  const [n,setN] = useRecoilState(AtomN);
  const n2 = useRecoilValue(AtomN2);
  useEffect(()=>{
    // 개발자도구 > Application
    // localStorage : 웹브라우저에 데이커를 키-값 쌍으로 저장해줌 (ex.아이디)
    if (!localStorage.getItem("n")) return;
    setN(parseInt(localStorage.getItem("n"))) // 증감 후에 local저장해두면 다시 새로고침해도 저장된 값이 그대로 뜸
    // +는 -랑 다르게 연결연산자, 산술연산자 둘다 가능하니까 parseInt해서 정수로 만들어줘야함
  },[])
  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
        <div>
        RecoilDiv1 : n={n}, n2={n2}
        </div>
        {/* ={} 앞에는 전달하는값 */}
        <RecoilDiv2/> 
    </div>
    
  )
}
