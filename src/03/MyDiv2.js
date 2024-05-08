import MyDiv3 from "./MyDiv3";

// (probs) 속성 넘겨받을 때 사용
// export default function MyDiv2(probs) {
//     const dname1 = 'vdiv1';
//     const dname2 = 'vdiv2';
//     const dname3 = 'vdiv3';
export default function MyDiv2({dn1,dn2,dn3}){
  return (
    <div className="flex flex-col p-5 m-10 
                    w-2/3 h-2/3 bg-blue-300 text-black">
    {/* (probs) 속성 넘겨받을 때 사용 */}
      {`${dn1} > ${dn2}`}
      <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3}/>
    </div>
  )
}
