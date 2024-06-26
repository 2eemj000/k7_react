import { useState, useEffect } from "react"
import GalleryCard from "./GalleryCard"
import userEvent from "@testing-library/user-event"

export default function Gallery() {
  // const imgUrl = "http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg"
  // const title = '태종대유원지'
  // const content = '부산광역시 영도구 동삼동'
  // const spTag = "태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교"
  
  const [gallery,setGallery] = useState([]) // fetch 데이터
  const [cards,setCards] = useState();
  // 데이터 fetch (getFetchData 만들기)
  const getFetchData = (url)=>{
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{ // 중괄호 하고 적으면 동시에 여러개 수행 가능
      console.log(data)
      setGallery(data.response.body.items.item)
  })
    .catch(err=>console.log(err))
  }
  // 컴포넌트 생성 시 (getFetchData 사용하기)
  useEffect(()=>{
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json`
    console.log(url)
    getFetchData(url)
  },[])

  // gallery 데이터가 만들어졌을 때
  useEffect(()=>{
  if(!gallery) return;
 console.log("gallery : ",gallery);
 let tm = gallery.map(item=>
                            <GalleryCard    key={item.galContentId}
                                            imgUrl={item.galWebImageUrl}
                                            title={item.galTitle}
                                            content={item.galPhotographyLocation}
                                            spTag={item.galSearchKeyword}/>)
 setCards(tm);
},[gallery])
  return (
    <div className="w-full h-full flex flex-col  justify-start items-start">
        <div className="w-full flex justify-center items-center m-5">
            입력
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
          {cards}
        </div>
    </div>
    
  )
}
