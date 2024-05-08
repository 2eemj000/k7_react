//대문자로 시작, 파일명과 일치시키기, 하나에 한기능만, return 반드시 있어야, import/export
//class 대신 className, src 뒤에 {}/수식 쓸 수 있음
// 창띄울때 terminal > npm start 치기 (Liveserver X)

function Hello() {
    return (
        //fragment 태그 : 하나로 묶어줌 (두개로 두면 error)
        <> 
            <p>
                K-digital 7기 이민주
            </p>
            <ul>
                <li>리액트 컴포넌트</li>
            </ul>
        </>
    );
}

export default Hello;