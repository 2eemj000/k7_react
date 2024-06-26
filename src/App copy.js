import './App.css';
// import logo from './logo.svg' ;
// import MyClock from './02/MyClock';
import { RiHomeHeartFill } from "react-icons/ri";
// import MyDiv from './03/MyDiv' ;
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import BoxOffice from './06/BoxOffice';
// import Gallery from './10/Gallery';
// import FoodMain from './07/FoodMain';
// import TrafficMain from './08/TrafficMain';
// import TrafficNav from './08_1/TrafficNav';
// import Traffic from './08_1/Traffic';
// import MyRef from './09/MyRef';
// import Festival from './11/Festival';
import RouteMain from './12/RouteMain';
function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-blue-100'>
        <p>리액트 실습</p> 
        <p><RiHomeHeartFill className='text-3xl text-orange-500'/></p>
      </header>
      <main className='grow flex justify-center items-center'>
        {/* <MyDiv /> */}
        {/* <MyList/> */}
        {/* <Lotto /> */}
        {/* <BoxOffice/> */}
        {/* <MyClock /> */}
        {/* <FoodMain /> */}
        {/* <TrafficMain/> */}
        {/* <TrafficNav/>*/}
        {/* <Traffic/> */}
        {/* <MyRef/> */}
        {/* <Festival/> */}
        {/* <Gallery/> */}
        <RouteMain/>
      </main>
      <footer className='flex justify-center items-center h-20 bg-yellow-900 text-slate-100'>
      ⓒ Lee Min Ju , K-digital-7
      </footer>
    </div>
  );
}

export default App;
