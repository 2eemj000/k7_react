import { useNavigate } from "react-router-dom";
import TailSelect from "../UI/TailSelect"
import { useState, useEffect, useRef } from "react"
import ButtonC from '../UI/ButtonC';
import getxy from "./getxy.json";
import TailInput from "../UI/TailInput";
export default function Frcst() {
  const [ops,setOps] = useState([])
  const inRef = useRef();
  const selRef = useRef();
  const [x, setX] = useState()
  const [y, setY] = useState()
  const [area, setArea] = useState()
  const navigate = useNavigate()

  // 컴포넌트 생성 시 (selectbox에 지역이 다 나오도록)
  useEffect(()=>{
    let tm = getxy.map(item=>item["1단계"])
    setOps(tm);
  },[])

  const handleArea = ()=>{
    let tm = getxy.filter(item=> item["1단계"] === selRef.current.value)
    tm=tm[0]
    console.log(tm)
    setX(tm["격자 X"])
    setY(tm["격자 X"])
    setArea(selRef.current.value)
  }
  const handleUrl = (gubun)=>{
    if (!x || !y || !inRef.current.value) {
      alert('날짜와 지역을 선택하시오!')
      return
    }
    navigate(`/frcstlt?gubun=${gubun}&x=${x}&y=${y}&dt=${inRef.current.value.replaceAll('-','')}&area=${area}`)
  }

  return (
      <div className="w-full h-full flex flex-col justify-start items-center">
        <h1 className="w-10/12 text-2xl font-bold flex justify-center items-center m-5">
            단기예보
       </h1>
       <div className="w-full flex justify-center items-center">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
          <TailInput id="dt" type="date" inRef={inRef} />
          <TailSelect id="sel" ops={ops} selRef={selRef} initText="--- 지역선택 ---" handleChange={handleArea} />
          <ButtonC caption="초단기예보" bcolor="orange" handleClick={() => handleUrl('초단기')} />
          <ButtonC caption="단기예보" bcolor="orange" handleClick={() => handleUrl('단기')} />
        </div>
       </div>
      </div>
  )
}
