import { hover } from "@testing-library/user-event/dist/hover"
// button에는 caption줘야함
export default function ButtonC({caption, bcolor, handleClick}) {
    const colorB = {
        'blue' : 'bg-blue-400',
        'orange' : 'bg-orange-400',
        'purple' : 'bg-purple-400'
    }
    // hover : 커서 놓았을때 색이 변하도록 
    const colorBHover = {
        'blue' : 'hover:bg-blue-600',
        'orange' : 'hover:bg-orange-600',
        'purple' : 'hover:bg-purple-600'
    }
    return (
    <button className={`inline-flex px-10 py-3 
                        rounded-md justify-center items-center
                        text-white font-bold m-2
                        ${colorB[bcolor]} ${colorBHover[bcolor]}`}
                        onClick={handleClick}>
      {caption}
    </button>
  )
}
