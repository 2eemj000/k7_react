import { BrowserRouter, Routes, Route } from "react-router-dom"
import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import RouteNav from "./RouteNav"
export default function RouteMain() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
        <BrowserRouter>
            <RouteNav/>
        {/* 이안에 있는 경로는 다 쓸수있음 */}
            <Routes>
                <Route path="/" element={<RouteHome/>}/>
                {/* p1은 URL 파라미터 사용 */}
                {/* /:item으로 값을 넘길 수 있음 -> item은 임의로 정한 변수명, page1,2에서 이 item을 받아낼 것 */}
                {/* useParams */}
                <Route path="/p1/:item" element={<RoutePage1/>}/>
                {/* useSearchParams */}
                <Route path="/p2" element={<RoutePage2/>}/>
                {/* http://localhost:3000/p2처럼 경로가 생김 */}
            </Routes>
        </BrowserRouter>
    </div>  
  )
}
