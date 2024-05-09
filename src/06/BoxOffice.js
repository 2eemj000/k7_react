import box from "./Box.json";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";

import { useState, useEffect } from "react";
export default function BoxOffice() {
    const[dailyList, setDailyList] = useState([]);
    // console.log(box.boxOfficeResult.dailyBoxOfficeList);
    const [selMv, setSelmv] = useState();
    
    // useEffect는 호출안해도 저절로 실행됨 (한번만 실행되도록)
    useEffect(()=>{
      setDailyList(box.boxOfficeResult.dailyBoxOfficeList) ;
    },[]);
    // 바뀔때바다 setSelmv는 dailyList의 첫번째값이 됨
    useEffect(()=>{
      setSelmv(dailyList[0]);
    },[dailyList]);
    // const tags = dailyList.map(item => 
    //                             <li key={item.movieCd}>
    //                                 [{item.rank}] : {item.movieNm}
    //                                 </li>) ;
    //                             )

    
// 아래 기본틀은 tailwind css table 검색해서 복붙 후 조절
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-start items-center my-10">
 
        <table
          className="bg-slate-100 w-11/12 text-left text-sm font-light text-surface">
          
          {/* <thead
            className="border-b border-neutral-400 font-medium">
            <tr className="bg-blue-600 text-white font-bold">
              {/* py값 조정하면 세로 간격 조절가능
              <th scope="col" className="px-6 py-3">순위</th>
              <th scope="col" className="px-6 py-3">영화명</th>
              <th scope="col" className="px-6 py-3">매출액</th>
              <th scope="col" className="px-6 py-3">관객수</th>
              <th scope="col" className="px-6 py-3">증감률</th>
            </tr>
          </thead> */}

        {/* tbody만 따로 컴포넌트 만들기 */}
          {/* <tbody>
            <tr
              className="border-b border-neutral-200  ease-in-out hover:bg-neutral-100">
              <td className="whitespace-nowrap px-6 py-3 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-3">Mark</td>
              <td className="whitespace-nowrap px-6 py-3">Otto</td>
              <td className="whitespace-nowrap px-6 py-3">@mdo</td>
              <td className="whitespace-nowrap px-6 py-3">@mdo</td>
            </tr>
          </tbody> */}
            <BoxOfficeThead />

            {/* !!! 컴포넌트를 최소단위로 나눠서 
            부모노드(BoxOffice)에 있는 다른자식노드의 state변수(selMv) 세터값(setSelmv)을 속성값처럼 줄 수 있음 !!! 
            클릭할 때마다 바뀌는 값을 그대로 화면을 다시 그려줘야하니까 state변수 사용해야 함 
            줄때는 probes를 통해 자식노드한테 건네줘야 함 (클릭함수, 세터변수) */}
            <BoxOfficeTbody dailyList = {dailyList} setSelmv={setSelmv}/>
            </table>
            {/* selMv를 바꾸려면 Tbody에서 바꿔야함 */}
            {/* && : selMv값이 있으면 반환하도록 */}
            {selMv && <BoxOfficeInfo selMv={selMv}/>}
    </div>
  </div>
  )
}
