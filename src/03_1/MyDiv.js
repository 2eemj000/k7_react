import MyDiv2 from "./MyDiv2";


// 단축키 rfc
export default function MyDiv() {
  // @ 변수로 두기
  const dname1 = 'vdiv1';
  const dname2 = 'vdiv2';
  const dname3 = 'vdiv3';
  return (
    <div className="flex flex-col p-5 m-10 
                    justify-center items-center
                    w-2/3 h-2/3 text-xl bg-lime-900 text-white">
    <div className="w-full">
      {/* @ 변수쓰고싶으면 중괄호로 묶어야함 */}
      {dname1}
      {/* div1 */}
    </div>
    <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3}/>
    {/* MyDiv2에 dn2={dname2}라는 속성을 줄 수 있음, Div2에서 넘겨준 애를 받아줘야함 */}
    </div>
  )
}
