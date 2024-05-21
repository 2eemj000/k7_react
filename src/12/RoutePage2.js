// useLocation 훅을 사용하면 전달된 쿼리스트링을 확인할 수 있음
// useSearchParams
import { useSearchParams,useLocation } from "react-router-dom"
export default function RoutePage2() {
    const fruits = ['🍎','🍌']
    const loc = useLocation()
    console.log(loc.pathname, loc.search)

    const [sParams] = useSearchParams()
    console.log(sParams)
    const item = sParams.get('item')
    let tm = []
    sParams.forEach((item)=>fruits.includes(item)?
                            tm.push(`${item}은 과일입니다.`)
                            :tm.push(`${item}은 과일이 아닙니다.`))

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-2xl font-bold flex justify-center items-center p-2">
        RoutePage2
      </h1>
      <div className="flex justify-center items-center text-xl">
        {/* {fruits.includes(item)? `${item}은 과일입니다.`
                                :`${item}은 과일이 아닙니다.`} */}
        {tm.join()}
      </div>
    </div>
  )
}
