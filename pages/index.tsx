import { useEffect, useState } from "react";
import { categories } from "./constants";
import { NavBar } from "./NavBar";
import { SingleReedFingeringChart } from "./SingleReedFingeringChart";
import { Start } from "./Start";
import { Woodwind } from "./types";

export default function Home() {
  const [currentFamily, setCurrentFamily] = useState("woodwind");
  const [currentInstrument, setCurrentInstrument] = useState<
    Woodwind | undefined
  >(categories[0].instruments[0]);

  return (
    <div className="w-full h-screen flex flex-col bg-slate-200 items-center justify-start touch-none">
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
      <NavBar
        currentInstrument={
          currentInstrument ? currentInstrument.name : undefined
        }
      />
    </div>
  );
}
