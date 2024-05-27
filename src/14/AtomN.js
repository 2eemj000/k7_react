import { atom,selector } from "recoil"
// function이 아니라 const ! 꼭 파일명과 같을 필요는 없음, atom 안에는 object{}
export const AtomN = atom({
    key:"AtomN",
    default:10
}) 
export const AtomN2 = selector({ // selector 이것도 마찬가지로 useRecoilValue로 불러옴
    key:"AtomN2",
    get:({get})=>{
        // let tm = get(AtomN)%2==0?"짝수":"홀수";
        // return tm;
        return get(AtomN)*2
    }
})