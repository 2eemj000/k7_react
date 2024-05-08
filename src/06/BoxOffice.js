import box from "./Box.json"
export default function BoxOffice() {
    // 10개의 배열이 console에 찍히도록
    // console.log(box.boxOfficeResult.dailyBoxOfficeList);
    const dailyList = box.boxOfficeResult.dailyBoxOfficeList ;
    const tags = dailyList.map(item => 
                                <li key={item.movieCd} className="text-blue-700">
                                    [{item.rank}위] : {item.movieNm}
                                    </li>) ;
  return (
    <div>
      <ul>
      {tags}
      </ul>
    </div>
  )
}
