import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { categories } from "./constants";
import { Woodwind } from "./types";

export const Start = ({
  currentFamily,
  setCurrentFamily,
  setCurrentInstrument,
}: {
  currentFamily: string;
  setCurrentFamily: Dispatch<SetStateAction<string>>;
  setCurrentInstrument: Dispatch<SetStateAction<Woodwind | undefined>>;
}) => {
  const listItems = () => {
    if (!currentFamily) {
      return categories.map(({ family }) => {
        return (
          <li key={family}>
            <button
              className="w-60 h-52 bg-blue-400 capitalize"
              onClick={() => setCurrentFamily(family)}
            >
              {family}
            </button>
          </li>
        );
      });
    }

    const instrumentsInFamily = categories.find(
      (obj) => obj.family === currentFamily
    );

    return instrumentsInFamily!.instruments.map((instrument) => {
      return (
        <li key={instrument.name}>
          <button
            className="w-60 h-32 flex justify-center items-center bg-blue-400"
            onClick={() => setCurrentInstrument(instrument)}
          >
            {instrument.name}
          </button>
        </li>
      );
    });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-bold underline text-center">
          Hello world!
        </h1>
      </div>
      <ul className="flex flex-col gap-5">{listItems()}</ul>
    </div>
  );
};
