import { useState, useEffect, useRef } from "react"
import { Link, useSearchParams } from "react-router-dom"
import TailSelect from "../UI/TailSelect"
import getcode from "./getcode.json"
export default function FrcstList() {
  const [sParams] = useSearchParams()
  const gubun = sParams.get("gubun")
  const x = sParams.get("x")
  const y = sParams.get("y")
  const dt = sParams.get("dt")
  const area = sParams.get("area")
  console.log(gubun, x, y, dt, area)
  // state 변수
  const [tdata,setTdata] = useState()
  const [ops,setOps] = useState([])
  // ref 변수
  const selRef = useRef()

  // 항목 선택
  const getFetchData = (url)=>{
    fetch(url)
    .then(resp=>resp.json()) // 응답메시지는 응답형태니까 그걸 json파일로 바꿔주는 것
    // .then(data=>console.log(data))
    // .catch(err=>console.log(err))
    .then(data=>console.log("fetch",data))
    .then(data=>setTdata(data.response.body.items.item))
    .catch(err=>console.log(err))
  }

  // 컴포넌트 생성시
  useEffect(()=>{
    // 항목 select
    let tm = getcode.filter(item=>gubun==="단기"
                                  ? item["예보구분"]==="단기예보"
                                  : item["예보구분"]==="초단기예보")
                    .map(item=>item["항목명"])
    console.log(tm)
    setOps(tm);
    let url;
    if (gubun==="초단기") {
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${process.env.REACT_APP_MV_KEY}`
      url = url + `&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`}
    else {
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${process.env.REACT_APP_MV_KEY}`
      url = url + `&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`}
    getFetchData(url)
  },[]);
  useEffect(()=>{
    console.log(tdata)
  })
  // 항목 선택
  const handleSelect=()=>{
    console.log(selRef.current.value)
  }
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
       <h1 className="w-10/12 text-2xl font-bold flex justify-center items-center m-5">
            <h2>{gubun}예보</h2>
       </h1>
        <div className="flex justify-center items-center">
          <TailSelect id="sel" ops={ops} selRef={selRef} initText="--- 지역선택 ---" handleChange={handleSelect}/>
        </div>
    </div>
  )
}
