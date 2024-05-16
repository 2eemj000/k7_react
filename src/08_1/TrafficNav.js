import ButtonC from "../UI/ButtonC";
// import { useState } from "react"; // 넘겨받을거니까 이것도 필요X
export default function TrafficNav({title,c,sel,setSel }) {
  // 이 아래내용은 Traffic.js에서 넘어올거니까 이제 필요X
  // const title = '대분류';
  // const c = ['차대사람', '차대차','차량단독', '철길건널목'];
  // const [sel,setSel]=useState();
  const cTag = c.map((item)=><ButtonC caption={item}
                                      // sel이 item과 같으면 orange 아니면 blue
                                      bcolor={sel===item?'orange':'blue'}
                                      key ={item}
                                      handleClick={()=>handleClick(item)}/>)
  // 버튼이 눌러지면
  const handleClick = (i)=>{
    // console.log(i)
    setSel(i);  // set값을 바꿔줘야함
  }
    
  return (
    <div className="w-full flex justify-start items-center my-5">
      <div className="w-1/5 flex justify-start items-center font-bold">
        교통사고 {title}
      </div>
      {/* 여기 아래에는 grid 씀 */}
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cTag}
      </div>
    </div>
  )
}
