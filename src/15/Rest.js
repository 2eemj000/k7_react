import { useEffect, useRef, useState } from "react"
import ButtonC from "../UI/ButtonC"

export default function Rest() {
  const [tdata, setTdata] = useState([]) // 전체데이터
  const [tags, setTags] = useState() // 데이터가 바뀌면 화면을 다시 그리려고

  const [isUpdate, setIsUpdate] = useState(false)
  const [isUpdateID, setIsUpdateID] = useState()


  const txt1Ref = useRef() // input태그의 값을 집어오려고
  const txt2Ref = useRef()

  const jsonDelete = async(id) =>{ // id값 있어야 함
    console.log(id)
    let url = `http://localhost:3005/posts/${id}`
    await fetch(url, {
      method : "DELETE" // Restful에서 제공하는 method (공공데이터에서는 사용X)
    })
    setTdata(tdata.filter(item=>item.id != id)) // 화면에서 삭제한 값 바로 사라지도록
  }

  const jsonUpdate = (item)=>{
    console.log(item)
    txt1Ref.current.value = item.title; // 입력칸에 값을 밀어넣어줌
    txt2Ref.current.value = item.author;
    setIsUpdate(true) // 수정 버튼을 누르면 true로 바뀌도록
    setIsUpdateID(item.id) // 어떤 아이디값을 수정해야하는지 알려줌
  }



  const jsonUpdate2=async()=>{ // 입력에서 바뀐 수정버튼 눌렀을 때 (하나의 버튼으로 두개의 기능하도록)
    console.log('jsonupdate2')
  
    const putData = {title: txt1Ref.current.value,
                     author: txt2Ref.current.value
    } 
    let url = `http://localhost:3005/posts/${isUpdateID}`;
    const resp = await fetch(url,{  method :'PUT',
                                    headers : {'Content-Type':'application/json'}, // object로 {}쓰기
                                    body : JSON.stringify(putData)
    })
    const data = await resp.json();
    console.log(data);
    setTdata(tdata.map(item=>item.id === isUpdateID? data : item)) // item.id가 업데이트id랑 같으면 data로 바꾸고 아니면 그대로 item
    txt1Ref.current.value = " "
    txt2Ref.current.value = " "
    setIsUpdate(false)
    setIsUpdateID(" ")
  }



  const jsonPost=async()=>{
    console.log('post')
    if (txt1Ref.current.value === ""){
      alert('제목을 입력하시오 !');
      txt1Ref.current.focus()
      return;
    }
    if (txt2Ref.current.value === ""){
      alert('작성자를 입력하시오 !');
      txt2Ref.current.focus()
      return;
    }
    const postData = {title: txt1Ref.current.value,
                      author: txt2Ref.current.value
    } 
    let url = 'http://localhost:3005/posts'
    const resp = await fetch(url,{  method :'POST',
                                    headers : {'Content-Type':'application/json'}, // object로 {}쓰기
                                    body : JSON.stringify(postData)
    })
    const data = await resp.json();
    console.log(data);
    setTdata([...tdata, data]) // tdata에 현재 data를 넣겠다 (최근 데이터 순서대로 하려면 [data, ...tdata ]로 바꾸기)
    txt1Ref.current.value=" " // 입력창 비우기
    txt2Ref.current.value=" " // 입력창 비우기
  }

  const handleOK=()=>{ // 하나의 버튼으로 두개의 기능하도록
    if (isUpdate) jsonUpdate2()
      else jsonPost();
  }

  const getFetchData = async(url)=>{ // async가 붙어있어야 await 붙일 수 있음
    const resp = await fetch(url) // 결괏값이 나와야 그 다음 문장 실행시킴
    const data = await resp.json()
    setTdata(data)
  }

  // 컴포넌트 생성 시 한번만 실행
  useEffect(()=>{
    let url = `http://localhost:3005/posts`
    getFetchData(url)
  },[])

  // tdata가 바뀔 때마다 실행
  useEffect(()=>{
    if (!tdata) return;
    console.log(tdata)
    let tm = tdata.map(item=>
      <div key={item.id} className="grid grid-cols-4 bg-orange-200 hover:bg-orange-400 gap-2 m-3 justify-start items-center rounded-md">
        <li className="whitespace-nowrap px-6 py-3 font-medium">[{item.id}]</li>
        <li className="whitespace-nowrap py-3 font-medium">{item.title}</li>
        <li className="whitespace-nowrap py-3">-- author : {item.author}</li>
        <div className="flex justify-items-end">
        <li className="whitespace-nowrap px-6 py-3 font-medium"><a href="#" className="inline-flex p-2 rounded-lg hover:bg-orange-200" onClick={()=>jsonDelete(item.id)}>[삭제]</a></li>
        <li className="whitespace-nowrap px-6 py-3 font-medium"><a href="#" className="inline-flex p-2 rounded-lg hover:bg-orange-200" onClick={()=>jsonUpdate(item)}>[편집]</a></li>
        </div>
      </div>
    )
    setTags(tm)
  },[tdata])

  // 화면 그리기
  return (
    <div className="w-full grid m-2 p-2 gap-5">
      <div className="w-full flex justify-center items-center gap-5"> 
      <label htmlFor="txt1">제목</label>
      <input className="w-1/3 border-gray-300 grid grid-cols-2 px-10 py-3 
                        rounded-md justify-center items-center
                        text-black font-bold bg-gray-50 border" 
                         ref={txt1Ref} type="text" id="txt1" name="txt1" required/>
      <label htmlFor="txt1">작성자</label>
      <input className="w-1/3 border-gray-300 grid grid-cols-2 px-10 py-3 
                        rounded-md justify-center items-center
                        text-black font-bold bg-gray-50 border" 
                         ref={txt2Ref} type="text" id="txt2" name="txt2" required/>
      <div className="m-1">
              <ButtonC caption={isUpdate? "수정" : "입력"}
                       bcolor="orange"
                       handleClick={handleOK} />

      </div>                   
      </div>
        <ul>
          {tags}
        </ul>
    </div>
  )
}

// cmd 창에서
// cd C:\Leeminju\frontend_2024\db
// npx json-server --watch db.json --port 3005 으로 실행시켜둬야함
