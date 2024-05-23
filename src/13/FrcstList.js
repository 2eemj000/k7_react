// 요청 메시지 명세에서 필수로 들어가는 항목은 무조건 들어가야함
import { useState, useEffect, useRef } from "react"
import { Link, useSearchParams } from "react-router-dom"
import TailSelect from "../UI/TailSelect"
import getcode from "./getcode.json"
export default function FrcstList() {
  // url 전달값
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
  const [selItem, setSelItem] = useState() // --항목선택--에서 선택한 항목 코드 정보
  const [tags, setTags] = useState() // 화면 tr 생성
  // ref 변수
  const selRef = useRef()


  // 항목 선택
  const getFetchData = (url)=>{
    console.log("url", url)
    fetch(url)
    .then(resp=>resp.json()) // 응답메시지는 응답형태니까 그걸 json파일로 바꿔주는 것
    .then(data=>{
      console.log("fetch",data)
    setTdata(data.response.body.items.item)
  })
  }
  
  // 항목 선택
  const handleSelect=()=>{
    console.log(selRef.current.value)
    let tm = getcode.filter(item=>(gubun==="단기"
                                  ? item["예보구분"]==="단기예보"
                                  : item["예보구분"]==="초단기예보") &&
                                    item["항목명"]===selRef.current.value)
    console.log("select item")
    console.log('tm[0]',tm[0])
    setSelItem(tm[0]) // tm의 0번째 배열값을 setSelItem에 넣어줌 ([]빼고 object로 풀어주려고)
    }

  // 컴포넌트 생성시
  useEffect(()=>{
    // 항목 select
    let tm = getcode.filter(item=>gubun==="단기"
                                  ? item["예보구분"]==="단기예보"
                                  : item["예보구분"]==="초단기예보")
                    .map(item=>item["항목명"]) // filter한 데이터에서 map돌면서 항목골라냄
    console.log(tm)
    setOps(tm);
    let url;
    if (gubun==="초단기") {
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${process.env.REACT_APP_API_KEY}`
      url = url + `&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`}
    else {
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${process.env.REACT_APP_API_KEY}`
      url = url + `&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`}
    getFetchData(url)
  },[]);

  useEffect(()=>{
    console.log(tdata)
  },[tdata])

  //selItem이 바뀌면
 useEffect(()=>{
  if (!selItem) return;
  console.log("selItem", selItem)
  let tm = tdata.filter(item=>item['category']===selItem['항목값'])
                .map(item=>
                  <tr key={`${item["fcstDate"]}${item["fcstTime"]}`}
                  className="border-b border-neutral-200  ease-in-out hover:bg-neutral-100">
                      <th scope="col" className="px-6 py-3">{selItem["항목명"]}</th>
                      <th scope="col" className="px-6 py-3">{item["fcstDate"]}</th>
                      <th scope="col" className="px-6 py-3">{item["fcstTime"]}</th>
                      <th scope="col" className="px-6 py-3">{item["fcstValue"]}{selItem["단위"]}</th>
                  </tr>)
  console.log("tdata filter",tm)
  setTags(tm)
 },[selItem])

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-3 gap-5">
       <h1 className="w-10/12 text-2xl font-bold flex justify-center items-center m-5">
            <h2>{gubun}예보</h2>
       </h1>
        <div className="flex justify-center items-center">
          <TailSelect id="sel" ops={ops} selRef={selRef} initText="--- 항목선택 ---" handleChange={handleSelect}/>
        </div>
        <table
          className="bg-slate-100 w-11/12 text-left text-sm font-light text-surface">
          <thead className="border-b border-neutral-400 font-medium">
            <tr className="bg-orange-400 text-white font-bold">
              <th scope="col" className="px-6 py-3">항목명</th>
              <th scope="col" className="px-6 py-3">예측일자</th>
              <th scope="col" className="px-6 py-3">예측시간</th>
              <th scope="col" className="px-6 py-3">예보값</th>
            </tr>
          </thead>
          <tbody>
            {tags}
          </tbody>
        </table>
    </div>
  )
}
