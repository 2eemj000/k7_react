import Ball from "./Ball";
import ButtonC from "../UI/ButtonC";
// 태그가 동적으로 변하려면 useState 사용
import { useState } from "react";

export default function Lotto(){
  const [tags, setTags] = useState();

  const handleOK = ()=>{
    let arr = [];
    while (arr.length < 7) {
    // Math.random() : 0보다 크고 1보다 작은 난수 생성
      let n = Math.floor(Math.random() * 45) + 1;
    // arr에 n이 포함되어있지 않으면 arr배열 끝에 n을 붙임
      if (!arr.includes(n)) arr.push(n)
    }
    // map의 결과는 배열, arr의 갯수만큼 ball이 만들어짐
    // 동적으로 생성할 때는 key값 줘야함
    let tm = arr.map(item => <Ball n={item} key={item}/>);
    // 6번째에는 "+"넣어야하니까 splice
    tm.splice(6, 0, <span className="text-3xl mx-2" key="sp">+</span>);
    // ball 7개랑 span태그가 tm에 저장됨
    setTags(tm);
}
  
  return (
    <div className="w-full flex flex-col rounded-md justify-center items-center p-20 bg-yellow-100">
      <div className="p-5 m-5">
        {/* 버튼을 누를 때마다 숫자가 바뀌도록 tag */}
        {tags}
      </div>
      <div className="p-5 m-5" />
      <ButtonC caption={'로또번호 생성'} bcolor={'blue'} handleClick={handleOK} />
    </div>
  )
}


