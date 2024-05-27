// useState는 화면을 바꿔주고 useEffect는 랜더링 이후 자동으로 실행되는 장치
// 바꾸는 state는 Div1에 있는데, 버튼은 Div3에 있음 (probs 전달)
// recoil은 이렇게 전달전달 안해도되도록 값이 공중에 떠있게 함 (전역변수 관리)
import { useState, useEffect } from "react"
import RecoilDiv2 from "./RecoilDiv2"

export default function RecoilDiv1() {
  const [n,setN] = useState(0) // 초깃값 : 0
  const [n2,setN2] = useState() // n2는 n따라 변하니까 초깃값 안줌

  useEffect(()=>{
    // 바꾸는건 세터값으로 => state가 변경될 때마다 화면이 업데이트됨
    // useEffect 안에 [의존되는 값들의 배열]
    // deps가 아예 없는 경우 : 컴포넌트가 리렌더링 될 때마다 호출
    // [deps]가 비어있을 때 : 컴포넌트가 처음 화면에 나타날 때만 실행
    // useEffect 안에 return함수 : 컴포넌트가 사라질 때 작업 수행
    setN2(n*2)
  },[n])
  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
        <div>
        RecoilDiv1 : n={n}, n2={n2}
        </div>
        {/* ={} 앞에는 전달하는값 */}
        <RecoilDiv2 num={n} setN={setN} num2={n2}/> 
    </div>
    
  )
}
