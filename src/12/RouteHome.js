import { Link } from "react-router-dom"
export default function RouteHome() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-2xl font-bold flex justify-center items-center p-2">
        RouteHome
      </h1>
      <div className="w-1/2 grid grid-cols-2 m-2 p-2 gap-2">
        <div className="w-full flex flex-col justify-center items-center text-xl">
            <h2 className="w-full p-2 bg-slate-100 text-xl font-bold flex justify-center items-center">Page1</h2>
            <ul className="m-2">
              <li><Link to="/p1/🍎">사과 🍎</Link></li>
              <li><Link to="/p1/🍌">바나나 🍌</Link></li>
              <li><Link to="/p1/🥕">당근 🥕</Link></li>
            </ul>
        </div>
        <div className="w-full flex flex-col justify-center items-center text-xl">
            <h2 className="w-full p-2 bg-slate-100 text-xl font-bold flex justify-center items-center">Page2</h2>
            <ul className="m-2">
              {/* <li ><Link to="/p2?item=🍎">사과 🍎</Link></li>
              <li><Link to="/p2?item=🍌">바나나 🍌</Link></li>
              <li><Link to="/p2?item=🥕">당근 🥕</Link></li> */}
              <li><Link to="/p2?item=🍎&item=🍌&item=🥕">사과 🍎,바나나 🍌,당근 🥕</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
