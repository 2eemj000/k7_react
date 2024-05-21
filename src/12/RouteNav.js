import ButtonC from "../UI/ButtonC"
import { useNavigate } from "react-router-dom"

export default function RouteNav() {
    const navigate = useNavigate()

  return (
    <div className="w-full grid grid-cols-3 m-2 p-2 gap-2">
      <ButtonC caption="Home"
                bcolor="blue"
                handleClick={()=>{navigate('/')}}/>
      <ButtonC caption="Page1"
                bcolor="blue"
                // navigate('/p1')만 쓰면 안되고 뒤에 뭐라도 달아야함 (/1)
                handleClick={()=>{navigate('/p1/1')}}/>
      <ButtonC caption="Page2"
                bcolor="blue"
                handleClick={()=>{navigate('/p2')}}/>
    </div>
  )
}
