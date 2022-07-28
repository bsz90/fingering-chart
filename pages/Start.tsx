import { Dispatch, SetStateAction } from "react";
import { instruments } from "./constants";
import { Instrument } from "./types";

export const Start = ({
  currentFamily,
  setCurrentFamily,
  setCurrentInstrument,
}: {
  currentFamily: string;
  setCurrentFamily: Dispatch<SetStateAction<string>>;
  setCurrentInstrument: Dispatch<SetStateAction<Instrument>>;
}) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-bold underline text-center">
          Hello world!
        </h1>
      </div>
      <ul className="flex flex-col gap-5">
        {instruments.map((instrument) => {
          return (
            <li key={instrument}>
              <button
                className="w-60 h-32 flex justify-center items-center bg-blue-400"
                onClick={() => setCurrentInstrument(instrument)}
              >
                {instrument}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
