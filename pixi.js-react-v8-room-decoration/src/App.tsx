import { useEffect, useRef, useState } from "react";
import "./App.css";
import { AppContext, AppContextInternal } from "./AppContext";
import { Canvas } from "./components/Canvas";
import { Ui } from "./components/Ui";

function App() {
  const [appContext, setAppContext] = useState<AppContext>();
  const appContextRef = useRef<AppContext | undefined>(undefined);

  useEffect(() => {
    appContextRef.current = new AppContext();
    setAppContext(appContextRef.current);
    return () => {
      appContextRef.current?.dispose();
    };
  }, [appContextRef]);

  if (appContext === undefined) {
    return <span>Loading</span>;
  }

  return (
    <>
      <AppContextInternal.Provider value={appContext}>
        <Ui />
        <Canvas />
      </AppContextInternal.Provider>
    </>
  );
}

export default App;
