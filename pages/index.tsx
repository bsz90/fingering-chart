import { useEffect, useState } from "react";
import { SingleReedFingeringChart } from "./SingleReedFingeringChart";
import { Start } from "./Start";
import { Woodwind } from "./types";

export default function Home() {
  const [currentFamily, setCurrentFamily] = useState("");
  const [currentInstrument, setCurrentInstrument] = useState<Woodwind>();

  useEffect(() => {
    console.log("currentInstrument changed");
    console.log(currentInstrument);
  }, [currentInstrument]);

  return currentInstrument ? (
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
  );
}
