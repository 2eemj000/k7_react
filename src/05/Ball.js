export default function Ball({n}) {
    const colorN = {
        'b0' : 'bg-violet-400',
        'b1' : 'bg-orange-400',
        'b2' : 'bg-lime-400',
        'b3' : 'bg-blue-400',
        'b4' : 'bg-red-400',
    }
  return (
    <div className={`inline-flex w-16 h-16 m-1 justify-center items-center rounded-full text-2xl font-bold 
                    ${colorN["b"+Math.floor(n/10)]}
                    text-white 
                    `}>
      {n}
    </div>
  )
}
