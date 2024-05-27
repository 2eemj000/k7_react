import { useEffect, useState } from "react"

export default function Rest() {
  const [tdata, setTdata] = useState([])
  const [tags, setTags] = useState()

  const getFetchData = async(url)=>{
    const resp = await fetch(url)
    const data = await resp.json()
    setTdata(data)
  }

  // useEffect(()=>{
  //   console.log(tdata)
  // },[tdata])

  useEffect(()=>{
    let url = `http://localhost:3005/posts`
    getFetchData(url)
    },[])
  useEffect(()=>{
    if (!tdata) return;
    let tm = tdata.map(item=>
      <div key={item.id} className="flex bg-orange-200 hover:bg-orange-400 gap-2 m-3 justify-start items-center rounded-md">
        <li className="whitespace-nowrap px-6 py-3 font-medium">[{item.id}]</li>
        <li className="whitespace-nowrap px-6 py-3 font-medium">{item.title}</li>
        <li className="whitespace-nowrap px-6 py-3">-- author : {item.author}</li>
      </div>
    )
    setTags(tm)
  },[tdata])
  return (
    <div className="w-full grid m-2 p-2 gap-5">
      <ul>
      {tags}
      </ul>
    </div>
  )
}
// cd C:\Leeminju\frontend_2024\db
// npx json-server --watch db.json --port 3005 으로 실행시켜둬야함
