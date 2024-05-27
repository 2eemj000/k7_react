import { RecoilRoot } from "recoil"
import RecoilDiv1 from "./RecoilDiv1"
export default function RecoilMain() {
  return (
    // recoil안에 있는 컴포넌트에서는 atom을 공유해서 쓸 수 있음 (Div1, Div2, Div3)
    <RecoilRoot> 
      <RecoilDiv1/>
    </RecoilRoot>
  )
}
