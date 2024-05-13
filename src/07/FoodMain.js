import fooddata from './fooddata.json';
import ButtonC from "../UI/ButtonC";
import { DiVim } from 'react-icons/di';
import FoodCard from './FoodCard';
import { useState } from 'react';

export default function FoodMain() {
    const [c1List, setC1List]=useState([]);
    // console.log(fooddata);
    // 띄어쓰기가 있어서 item.운영주체 분류라고 하면 인식X
    let c1 = fooddata.map(item=>item["운영주체 분류"]);
    // let c1List = fooddata.map(item=><FoodCard
    //                                     data={item}/>);
    
    // Set으로 가지고있는 것 중 중복제거
    c1 = new Set(c1);
    // 한개씩 가져와서 배열에 넣어달라 : spread 연산자 (*Set으로는 map사용불가)
    c1 = [...c1];
    console.log("c1",c1);

    const handleC1 = (c)=>{
        console.log(c)
        // 골라내야 하니까 map이 아니라 filter써야함
        let tm = fooddata.filter( (item) => item["운영주체 분류"] === c)
                         .map(item=><FoodCard data={item} key={item["사업장명"]}/>)
        // 버튼을 누르면 setC1List가 바뀜 !
        setC1List(tm);
    }
    const clBts = c1.map(item=>
                        <ButtonC caption={item}
                        key ={item}
                        bcolor={'blue'}
                        handleClick={()=>{handleC1(item)}}/>
    )
   // const data = fooddata.map(item=>item); -> 필요없음
    

  return (
    <div className='flex flex-col w-full h-full justify-start items-center'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4 my-5 px-2 justify-between items-center'>
            {clBts}
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
            {c1List}
        </div>
    </div>
  )
}

