export default function BoxOfficeInfo({selMv}) {
  return (
    <div className="w-11/12 h-10 flex justify-center items-center bg-orange-300 text-black font-bold">
      [ "{selMv.movieNm} ({selMv.movieCd})"의 개봉일은 {selMv.openDt}
                (
                    <span className={selMv.rankOldAndNew=='OLD'? "text-red-500" : "text-blue-500"}>
                         {selMv.rankOldAndNew}
                    </span>
                )입니다 ]
    </div>
  )
}
