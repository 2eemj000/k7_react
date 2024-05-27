import RecoilDiv3 from "./RecoilDiv3"

// {} 안에는 전달받는 값
export default function RecoilDiv2({num,setN, num2}) {
  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
        <div>
        RecoilDiv2 : n2={num2}
        </div>
        {/* ={} 앞에는 전달하는값 */}
        <RecoilDiv3 n={num}  setN={setN} n2={num2}/>
    </div>
  )
}
