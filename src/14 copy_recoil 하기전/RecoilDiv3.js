import React from 'react'
import ButtonC from '../UI/ButtonC'

// {} 안에는 전달받는 값, ()이 아니라 ({})으로 한번더 묶어야함
export default function RecoilDiv3({n,setN}) {
    const handleUP=()=>{
        // 바꾸는건 세터값으로
        setN(n+1)
    }
    const handleDOWN=()=>{
        setN(n-1)
    }
  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
      <div>
      RecoilDiv3 : n={n}
      </div>
      <div>
        <ButtonC caption="증가" bcolor="orange" handleClick={handleUP}/>
        <ButtonC caption="감소" bcolor="orange" handleClick={handleDOWN}/>
      </div>
    </div>
  )
}
