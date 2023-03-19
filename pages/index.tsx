import { useState } from "react";
import { BrassFingeringChart } from "./BrassFingeringChart";
import { NavBar } from "./NavBar";
import { SingleReedFingeringChart } from "./SingleReedFingeringChart";
import { BrassInstrument, Instrument, WoodwindInstrument } from "./types";
import { isBrass, isWoodwind } from "./utils";

export default function Home() {
  const [currentInstrument, setCurrentInstrument] = useState<Instrument>(
    WoodwindInstrument.SAXOPHONE
  );

  const determineFingeringChart = (currentInstrument: Instrument) => {
    if (isWoodwind(currentInstrument)) {
      return (
        <SingleReedFingeringChart
          currentInstrument={currentInstrument as WoodwindInstrument}
          setCurrentInstrument={setCurrentInstrument}
        />
      );
    }
    if (isBrass(currentInstrument)) {
      return (
        <BrassFingeringChart
          currentInstrument={currentInstrument as BrassInstrument}
          setCurrentInstrument={setCurrentInstrument}
        />
      );
    }
    throw new Error();
  };

  return (
    <div className="w-full h-screen flex flex-col bg-slate-200 items-center justify-start touch-none">
      {determineFingeringChart(currentInstrument)}
      <NavBar
        currentInstrument={currentInstrument}
        setCurrentInstrument={setCurrentInstrument}
      />
    </div>
  );
}
