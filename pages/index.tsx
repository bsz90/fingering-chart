import { useEffect, useState } from "react";
import { SingleReedFingeringChart } from "./SingleReedFingeringChart";
import { Start } from "./Start";
import { Woodwind } from "./types";

export default function Home() {
  const [currentFamily, setCurrentFamily] = useState("");
  const [currentInstrument, setCurrentInstrument] = useState<Woodwind>();

  return (
    <div className="w-full h-screen flex  flex-col items-center justify-start touch-none">
      <div className="w-full h-16 shrink-0 bg-blue-400 mb-8">Header</div>
      {currentInstrument ? (
        <SingleReedFingeringChart
          currentInstrument={currentInstrument}
          setCurrentInstrument={setCurrentInstrument}
        />
      ) : (
        <Start
          currentFamily={currentFamily}
          setCurrentFamily={setCurrentFamily}
          setCurrentInstrument={setCurrentInstrument}
        />
      )}
    </div>
  );
}
