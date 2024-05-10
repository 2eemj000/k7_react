import { useState } from 'react';
import bank from './img/bank.png' ;
import busan from './img/busan.png';
import market from './img/market.png';

// 다시그려져야할때 state 변수
// 초기값을 flase로 두고 누르면 바뀌도록 함
export default function FoodCard({data}) {
    const [isShow, setIsShow] = useState(false);
    const handleShow = ()=>{
        setIsShow(!isShow);
    }

    // const data = {
    //     "구분": "광역지원센터",
    //     "시군구": "영도구",
    //     "사업장명": "영도구기초푸드뱅크",
    //     "신고기준": "임의",
    //     "사업장 소재지": "부산광역시 영도구 상리로63-16(동삼동)",
    //     "연락처(대표번호)": "051-404-5061",
    //     "팩스번호": "051-404-5062",
    //     "운영주체 분류": "2.재단법인",
    //     "운영주체명": "상리종합사회복지관"
    //   }

  return (
    <div className='flex w-full h-40 justify-center items-start m-2 p-3'>
        <div className='w-40 h-80'>
            <img src={data["구분"]==="광역지원센터"?busan:
                      data["구분"]==="기초푸드뱅크"?bank:market
            }/>   
        </div>
        <div className='m-4 w-full'>
        <div className='flex flex-col justify-start items-start p-4 bg-slate-300'>
            <h1 className='text-xl font-black'>
                {data["사업장명"]}
            </h1>
            <h2 className='text-lg font-bold'>
                {data["운영주체명"]}
            </h2>
            <p>
                {data["사업장 소재지"]}
            </p>
        </div>
        <div className='justify-center items-center w-full p-2 h-10 bg-slate-500'onClick={handleShow}>
            {isShow && <p className='justify-center items-center text-white'>
               [ TEL ] {data["연락처(대표번호)"]}
            </p>
            }
        </div>
      </div>
    </div>
  )
}
