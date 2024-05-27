import { useEffect, useState } from "react"

export default function Rest() {
  const [tdata, setTdata] = useState()
  const [tags, setTags] = useState()

  const getFetchData = async(url)=>{
    const resp = await fetch(url)
    const data = await resp.json()
    setTdata(data)
  }

  useEffect(()=>{
    console.log(tdata)
  },[tdata])

  useEffect(()=>{
    let url = `http://localhost:3005/posts`
    getFetchData(url)
    },[])
  useEffect(()=>{
    if (!tdata) return;
    let tm = tdata.map(item=>item.title)
    setTags(tm)
  },[tdata])
  return (
    <div>
      Rest
      {tags}
    </div>
  )
}
// cd C:\Leeminju\frontend_2024\db
// npx json-server --watch db.json --port 3005 으로 실행시켜둬야함
