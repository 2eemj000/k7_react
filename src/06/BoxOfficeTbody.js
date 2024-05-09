import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

export default function BoxOfficeTbody({dailyList, setSelmv}) {
    console.log(dailyList);
    const handleMvSelect = (mv)=> {
        console.log("handleMvSelect",mv);
        setSelmv(mv);
        // 선택할때마다 BoxOffice의 Selmv가 바뀜
    }
    
    // 10개 돌때는 map을 이용
    const tags = dailyList.map(item=>
        // 10개의 td에 다 키값안줘도됨 -> tr 하나만 줘도 가능
        // onClick이벤트도 마찬가지로 tr한테 달기 (콜백함수 호출), 값이 바껴야하니까 state변수를 바꿔줘야함
    <tr key={item.movieCd}
        onClick={()=>{handleMvSelect(item)}}
        // 10개 중에 뭔가를 선택하면 내 item을 전달해줄게
      className="border-b border-neutral-400  ease-in-out hover:bg-slate-300">
      <td className="whitespace-nowrap px-6 py-3 font-medium">{item.rank}</td>
      <td className="whitespace-nowrap px-6 py-3">{item.movieNm}</td>
      {/* //  자바스크립트 천단위 콤마 검색 후 toLocaleString(), 문자열에서 정수로 바꿔줘야함 */}
      <td className="whitespace-nowrap px-6 py-3 text-right">{parseInt(item.salesAcc).toLocaleString()}</td>
      <td className="whitespace-nowrap px-6 py-3 text-right">{parseInt(item.audiAcc).toLocaleString()}</td>
      <td className=" font-bold px-2 py-2 flex justify-center items-center whitespace-nowrap px-6 py-3">
        <span>{item.rankInten > 0 ? <GoTriangleUp className="text-red-600" />:item.rankInten <0 ? <GoTriangleDown className="text-blue-600" /> : '-'}
        </span>
        <span>                      
        {parseInt(item.rankInten)!=0 && Math.abs(item.rankInten)}
        </span>
        </td>
    </tr>
    )

  return (
    <tbody>
        {tags}
    </tbody>
  )
}
