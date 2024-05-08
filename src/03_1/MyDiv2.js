import MyDiv3 from "./MyDiv3";

// (probs) 속성 넘겨받을 때 사용
export default function MyDiv2(probs) {
    const dname1 = 'vdiv1';
    const dname2 = 'vdiv2';
    const dname3 = 'vdiv3';
  return (
    <div className="flex flex-col p-5 m-10 
                    w-2/3 h-2/3 bg-lime-700 text-white">
    {/* (probs) 속성 넘겨받을 때 사용 */}
      {`${probs.dn1} > ${probs.dn2}`}
      <MyDiv3 dn1={dname1} dn2={dname2} dn3={dname3}/>
    </div>
  )
}
