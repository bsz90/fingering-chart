import { useEffect, useReducer, useState } from "react";
import { instrumentProperties } from "./constants";
import { NavBar } from "./NavBar";
import {
  Action,
  BrassInstrument,
  DisplayState,
  Instrument,
  InstrumentProp,
  WoodwindInstrument,
} from "./types";
import { determineFingeringChart, isBrass, isWoodwind } from "./utils";

const displayReducer = (state: DisplayState, action: Action): DisplayState => {
  switch (action.type) {
    case InstrumentProp.NEW_INSTRUMENT: {
      return { ...action.payload };
    }
    case InstrumentProp.FOURTH_VALVE: {
      const newState = { ...action.payload };
      newState[InstrumentProp.FOURTH_VALVE] =
        !action.payload[InstrumentProp.FOURTH_VALVE];
      return newState;
    }
    case InstrumentProp.TRIGGER: {
      const newState = { ...action.payload };
      newState[InstrumentProp.TRIGGER] =
        !action.payload[InstrumentProp.TRIGGER];
      return newState;
    }
    case InstrumentProp.TRILL_KEYS: {
      const newState = { ...action.payload };
      newState[InstrumentProp.TRILL_KEYS] =
        !action.payload[InstrumentProp.TRILL_KEYS];
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

  useEffect(
    () =>
      displayDispatch({
        type: InstrumentProp.NEW_INSTRUMENT,
        payload: instrumentProperties[currentInstrument],
      }),
    [currentInstrument]
  );

  return (
    <div className="w-full h-screen flex flex-col bg-slate-200 items-center justify-start touch-none">
      {determineFingeringChart(
        currentInstrument,
        setCurrentInstrument,
        display,
        displayDispatch
      )}
      <NavBar
        currentInstrument={currentInstrument}
        setCurrentInstrument={setCurrentInstrument}
      />
    </div>
  );
}
