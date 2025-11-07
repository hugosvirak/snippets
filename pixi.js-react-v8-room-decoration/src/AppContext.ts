import { createContext, useContext } from "react";

export class AppContext {
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
