import RecoilDiv3 from "./RecoilDiv3"
import { AtomN2 } from "./AtomN" // 중괄호 안에 들고오기
import { useRecoilValue } from "recoil"

// {} 안에는 전달받는 값
export default function RecoilDiv2() {
  const n2 = useRecoilValue(AtomN2);
  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
        <div>
        RecoilDiv2 : n2={n2}
        </div>
        {/* ={} 앞에는 전달하는값 */}
        <RecoilDiv3/>
    </div>
  )
}
