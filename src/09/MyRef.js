import { useState,useEffect,useRef } from "react";
import ButtonC from "../UI/ButtonC";

export default function MyRef() {
    let cVal =0 ;
    const handleClickComp=()=>{
        cVal++;
        console.log("cVal : ",cVal)
    }

    const[sVal,setSVal]=useState(0)
    const handleClickState=()=>{
        setSVal(sVal+1)
    }

    const rVal = useRef(0)
    useEffect(()=>{
        console.log("sVal = ",sVal)
    },[sVal])
    const handleClickRef=()=>{
        rVal.current = rVal.current+1
        console.log("rVal = ",rVal)
    }

    const x1 = useRef();
    const x2 = useRef();
    const x3 = useRef();

    const handleClick=()=>{
        if(!x1.current.value){
            alert("값을 입력하세요 !");
            x1.current.focus();
            return
        }
        console.log("x1 = ",x1.current.value )
        console.log("x2 = ",x2.current.value )
        x3.current.value = parseInt(x1.current.value)+parseInt(x2.current.value)
    }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-20 p-5 m-5 font-bold text-xl">
        <span>컴포넌트 변수 : {cVal}</span>
        <span className="mx-5">state 변수 : {sVal}</span>
        {/* ref변수 쓸때는 rVal.current라고 써야함 */}
        <span>ref 변수 : {rVal.current}</span>
      </div>
      <div>
        <span><ButtonC  caption="컴포넌트 변수" // 내부적으로는 바뀌지만 화면에는 안보임 => 화면에 보이려면 state변수
                        bcolor="blue"
                        handleClick={handleClickComp}/></span>
        <span><ButtonC  caption="state 변수"
                        bcolor="blue"
                        handleClick={handleClickState}/></span>
        <span><ButtonC  caption="ref 변수"
                        bcolor="blue"
                        handleClick={handleClickRef}/></span>
      </div>

      <div className="grid grid-cols-5 m-5">
        <input type="number" id="txt1"
            ref={x1}
            className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5-blue-500" placeholder="0" required/>
        <span className="inline-flex justify-center items-center">+</span>
        <input type="number" id="txt2"
            ref={x2}
            className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5-blue-500" placeholder="0" required/>
        <ButtonC caption="="
                 bcolor="blue"
                 handleClick={handleClick}/>
        <input type="number" id="txt3" readOnly
        className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5-blue-500" placeholder="0" required/>

    </div>
    </div>
  )
}
