import GalleryCard from "../10/GalleryCard"
import { useState,useEffect,useRef } from "react"
import TailSelect from "../UI/TailSelect"

export default function Festival() {
    const [festival,setFestival] = useState()
    const [cards,setCards] = useState()
    const [ops,setOps] = useState()
    const getFetchData = (url)=>{
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
            setFestival(data.getFestivalKr.item)
        })
        .catch(err=>console.log(err))
    }
    const selRef = useRef();
    const handleGuSelect = (e)=>{
        e.preventDefault();
        console.log(selRef.current.value)
        let tm = festival.filter(item=>item.GUGUN_NM===selRef.current.value)
                    // tm은 전체 데이터인 festival을 돌아야함
                         .map(item=><GalleryCard key={item.TITLE}
                                                 imgUrl={item.MAIN_IMG_THUMB}
                                                 title={item.MAIN_TITLE}
                                                 content={item.ADDR1}
                                                 spTag={item.HOMEPAGE_URL}/>)
        setCards(tm)
    }
    useEffect(()=>{
        let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?'
        url=url+`serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=37&resultType=JSON`
        getFetchData(url);
    },[]);

     // 데이터가 fetch 되었을때 
     // 구, 군만 모아서 정렬한게 tm2
    useEffect(() => {
        if(!festival) return;
        console.log("festival : ",festival);
        let tm2 = festival.map(item=>item.GUGUN_NM)
        tm2 = [...new Set(tm2)].sort();
        setOps(tm2)
    },[festival])
    
  return (
    <div className="w-full h-full flex flex-col justify-start items-start">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5">
        <label htmlFor="op" 
                 className="block text-xl font-bold
                            justify-center items-center mr-5
                           text-black">
                 부산축제정보
        </label>
        {ops && <TailSelect id = "op"
                    selRef = {selRef}
                    ops = {ops}
                    initText = "-- 부산 지역 구/군 선택 --"
                    handleChange = {handleGuSelect}/>}
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
            {cards}
        </div>
    </div>
  )
}
