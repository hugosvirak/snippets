import { createContext, useContext } from "react";
import { Value } from "./utils/Value";

export class AppContext {
  beds = new Value(new Array<{ id: number; x: number; y: number }>());

  public readonly dispose = () => {
    //
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
