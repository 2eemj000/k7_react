import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import { RiHomeHeartFill } from "react-icons/ri";
import MyClock from './02/MyClock';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import FoodMain from './07/FoodMain';
import Traffic from './08_1/Traffic';
import Gallery from './10/Gallery';
import Festival from './11/Festival';
import Frcst from './13/Frcst';
// FrcstList처럼 이 페이지에서 안쓰더라도 전체 경로정보를 등록해놔야 함 , Route
import FrcstList from './13/FrcstList';

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-blue-100'>
        <p>리액트 실습</p> 
        <ul className='flex justify-center items-center gap-2'>
          <li className='bg-blue-400 hover:bg-orange-400 px-5 py-3 
                        rounded-md justify-center items-center
                        text-white font-bold text-sm'><Link to="/MyClock">MyClock</Link></li>
          <li className='bg-blue-600 hover:bg-orange-600 px-5 py-3 
                        rounded-md justify-center items-center
                        text-white font-bold text-sm'><Link to="/Lotto">Lotto</Link></li>
          <li className='bg-blue-400 hover:bg-orange-400 px-5 py-3 
                        rounded-md justify-center items-center
                        text-white font-bold text-sm'><Link to="/BoxOffice">BoxOffice</Link></li>
          <li className='bg-blue-600 hover:bg-orange-600 px-5 py-3 
                        rounded-md justify-center items-center
                        text-white font-bold text-sm'><Link to="/FoodMain">FoodMain</Link></li>
          <li className='bg-blue-400 hover:bg-orange-400 px-5 py-3 
                        rounded-md justify-center items-center
                        text-white font-bold text-sm'><Link to="/Traffic">Traffic</Link></li>
          <li className='bg-blue-600 hover:bg-orange-600 px-5 py-3 
                        rounded-md justify-center items-center
                        text-white font-bold text-sm'><Link to="/Gallery">Gallery</Link></li>
          <li className='bg-blue-400 hover:bg-orange-400 px-5 py-3 
                        rounded-md justify-center items-center
                        text-white font-bold text-sm'><Link to="/Festival">Festival</Link></li>
          <li className='bg-blue-600 hover:bg-orange-600 px-5 py-3 
                        rounded-md justify-center items-center
                        text-white font-bold text-sm'><Link to="/frcst">Forecast</Link></li>
        </ul>
        {/* <p><RiHomeHeartFill className='text-3xl text-orange-500'/></p> */}
      </header>
      <main className='grow flex justify-center items-center'>
        <Routes>
          <Route path="/MyClock" element={<MyClock />}/>
          <Route path="/Lotto" element={<Lotto />}/>
          <Route path="/BoxOffice" element={<BoxOffice />}/>
          <Route path="/FoodMain" element={<FoodMain />}/>
          <Route path="/Traffic" element={<Traffic />}/>
          <Route path="/Gallery" element={<Gallery />}/>
          <Route path="/Festival" element={<Festival />}/>
          <Route path="/frcst" element={<Frcst/>}/>
          {/* 경로정보를 등록해놔야 함 , Route */}
          <Route path="/frcstlt" element={<FrcstList/>}/> 
        </Routes>
      </main>
      <footer className='flex justify-center items-center h-20 bg-yellow-900 text-slate-100'>
      ⓒ Lee Min Ju , K-digital-7
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App;
