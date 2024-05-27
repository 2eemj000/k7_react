import ButtonC from '../UI/ButtonC'
import { AtomN } from "./AtomN" // 중괄호 안에 들고오기
// import { useRecoilValue } from "recoil" // 값만 가지고오면 될때는 이거 !
import { useRecoilState } from 'recoil' // useState처럼 상태가 변해야할때는 이거 !

// {} 안에는 전달받는 값, ()이 아니라 ({})으로 한번더 묶어야함
export default function RecoilDiv3() {
    // const n = useRecoilValue(AtomN) // 공유해서 쓰니까 Div2까지 전달할 필요는 없음 (쓰는 페이지에서만)
    const [n,setN] = useRecoilState(AtomN) // useState 쓰듯이 값이 변할 때는 useRecoilState
    const handleUP=()=>{
      setN(n+1)
    }
    const handleDOWN=()=>{
      setN(n-1)
    }
    const handleSAVE=()=>{
      localStorage.setItem("n",n)
    }
    const handleDEL=()=>{
      localStorage.removeItem("n")
      setN(0)
    }
  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
      <div>
      RecoilDiv3 : n3={n}
      </div>
      <div>
        <ButtonC caption="증가" bcolor="orange" handleClick={handleUP}/>
        <ButtonC caption="감소" bcolor="orange" handleClick={handleDOWN}/>
        <ButtonC caption="local 저장" bcolor="blue" handleClick={handleSAVE}/>
        <ButtonC caption="local 삭제" bcolor="blue" handleClick={handleDEL}/> 
      </div>
    </div>
  )
}
