export default function MyDiv3({dn1,dn2,dn3}) {
    return (
      <div className="flex flex-col p-5 m-10 
                      w-2/3 h-2/3 bg-blue-100 text-black">
        {`${dn1} > ${dn2} > ${dn3}`}
      </div>
    )
  }