import { useEffect, useReducer, useState } from "react";
import { BrassFingeringChart } from "./BrassFingeringChart";
import { instrumentProperties } from "./constants";
import { NavBar } from "./NavBar";
import { SingleReedFingeringChart } from "./SingleReedFingeringChart";
import {
  Action,
  BrassInstrument,
  DisplayState,
  Instrument,
  Toggle,
  WoodwindInstrument,
} from "./types";
import { isBrass, isWoodwind } from "./utils";

const displayReducer = (state: DisplayState, action: Action): DisplayState => {
  switch (action.type) {
    case Toggle.NEW_INSTRUMENT: {
      console.log(action.payload);
      return { ...action.payload };
    }
    case Toggle.FOURTH_VALVE: {
      const newState = { ...action.payload };
      newState[Toggle.FOURTH_VALVE] = !action.payload[Toggle.FOURTH_VALVE];
      return newState;
    }
    case Toggle.TRIGGER: {
      const newState = { ...action.payload };
      newState[Toggle.TRIGGER] = !action.payload[Toggle.TRIGGER];
      return newState;
    }
    case Toggle.TRILL_KEYS: {
      const newState = { ...action.payload };
      newState[Toggle.TRILL_KEYS] = !action.payload[Toggle.TRILL_KEYS];
      return newState;
    }
    default:
      throw new Error();
  }
};

export default function Home() {
  const [currentInstrument, setCurrentInstrument] = useState<Instrument>(
    WoodwindInstrument.SAXOPHONE
  );

  const [display, displayDispatch] = useReducer(
    displayReducer,
    instrumentProperties[currentInstrument]
  );

  const determineFingeringChart = (currentInstrument: Instrument) => {
    if (isWoodwind(currentInstrument)) {
      return (
        <SingleReedFingeringChart
          currentInstrument={currentInstrument as WoodwindInstrument}
          setCurrentInstrument={setCurrentInstrument}
          display={display}
          displayDispatch={displayDispatch}
        />
      );
    }
    if (isBrass(currentInstrument)) {
      return (
        <BrassFingeringChart
          currentInstrument={currentInstrument as BrassInstrument}
          setCurrentInstrument={setCurrentInstrument}
          display={display}
          displayDispatch={displayDispatch}
        />
      );
    }
    throw new Error();
  };

  useEffect(
    () =>
      displayDispatch({
        type: Toggle.NEW_INSTRUMENT,
        payload: instrumentProperties[currentInstrument],
      }),
    [currentInstrument]
  );

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
