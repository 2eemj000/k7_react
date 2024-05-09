
import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";

function MyClock() {

  return(
    <header className="w-full h-full
                        flex flex-col
                        justify-center items-center bg-blue-200">
      <MyClockImage />
      <MyClockTime /> 
    </header>
  );
}

export default MyClock ;