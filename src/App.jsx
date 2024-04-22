import { useState } from "react";
import Digit from "./Digit";

function App() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  console.log(date);
  return (
    <main className="w-full h-screen flex justify-center bg-[#070F2B] text-[#ffffff] items-center gap-4">
      <Digit value={0} className={"leftHour"} />
      <Digit value={9} className={"leftHour"} />
      <div className="semiColon">
        <div></div>
        <div></div>
      </div>
      <Digit value={2} className={"leftHour"} />
      <Digit value={1} className={"leftHour"} />
    </main>
  );
}

export default App;
