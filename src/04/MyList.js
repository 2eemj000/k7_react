// 데이터 가져오기 (MyListData 이름으로)
import MyListData from "./MyListData.json";
import MyListitem from "./MyListitem";

export default function MyList() {
    console.log(MyListData)
    // tag로 img 표시하기 - map 사용 (array로 나타남)
    // const tags = MyListData.map(item=>
    //                             <img src={item.imgUrl}/>)
    // react가 키 4개를 구분하기 위해서 key값 설정 (아니면 개발자도구에서 경고뜸)
    const tags = MyListData.map(item=> 
                                    <MyListitem key={item.title}
                                                title={item.title}
                                                imgUrl={item.imgUrl}
                                                content={item.content}/>)
  return (
    <div className="w-full grid grid-cols-2 m-2 p-2 gap-5">
      {/* tags로 배열을 만들었으니까 tags를 불러야함 */}
      {tags}
    </div>
  )
}
