import { createContext, useContext } from "react";
import { Value } from "./utils/Value";

export class AppContext {
  beds = new Value(new Array<{ id: number; x: number; y: number }>());

  public readonly dispose = () => {
    //
  };

  public createBed = () => {
    const beds = this.beds.get();
    const newBeds = [...beds, { id: beds.length, x: 0, y: 0 }];

    this.beds.set(newBeds);
  };
}

export const AppContextInternal = createContext<AppContext | undefined>(
  undefined
);

export function useAppContext() {
  const context = useContext(AppContextInternal);
  if (context === undefined) {
    throw new Error("Context must be within Provider");
  }
  return context;
}
