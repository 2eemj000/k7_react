import './MyClock.css';
import style from './My.module.css' ;
import { useState, useEffect } from 'react';

function MyClockTime() {
  const [ctime, setCTime] = useState(new Date());
  useEffect(()=>{
    //  setInterval(콜백함수, 시간) : 1초(1000ms)마다 한번씩 어떤 일을 한다
    setInterval(()=>{
      setCTime(new Date())
    },1000);

    return()=>{
      clearInterval(tm);
    }
  },[]);

  
  // const now = new Date();
  // const nowStr = now.toLocaleTimeString() ;
  // const gubun = nowStr.substring(0, 2) ;
  // const st = {
  //               color : "yellow", 
  //               fontWeight : "bold"
  //             } ;

  // let divStyle ;
  // if (gubun == '오전') divStyle = "div1" ;
  // else divStyle = "div2" ;

  return(
    <>
    {/* {
      (gubun === '오전') ? <div className="div1">{nowStr}</div> 
                         : <div className="div2">{nowStr}</div> 
    } */}

      {/* <div className={gubun === '오전' ? "div1" : "div2"}> */}
      {/* <div style={{color : "yellow", fontWeight : "bold"}}> */}
      {/* <div style={st}> */}
      <div className={style.c1}>
        {ctime.toLocaleDateString()}
      </div> 
    </>
  );
}

export default MyClockTime ;