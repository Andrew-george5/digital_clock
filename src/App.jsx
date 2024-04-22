import { useState } from "react";
import Digit from "./Digit";

function App() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [isNight, setIsNight] = useState(hours > 12);
  setInterval(() => {
    setMinutes(new Date().getMinutes());
    setHours(new Date().getHours());
    setIsNight(hours > 12);
  }, 1000);

  console.log(hours);
  return (
    <main className="w-screen h-screen flex justify-center bg-[#070F2B] text-[#ffffff] items-center gap-4">
      <Digit value={Math.floor((hours % 12) / 10)} />
      <Digit value={(hours % 12) % 10} />
      <div className="semiColon">
        <div></div>
        <div></div>
      </div>
      <Digit value={Math.floor(minutes / 10)} />
      <Digit value={minutes % 10} />
      <div className="text-9xl">{isNight ? "PM" : "AM"}</div>
    </main>
  );
}

export default App;
