import { useAppContext } from "../AppContext";

export function Ui() {
  const appContext = useAppContext();

  return (
    <>
      <button onClick={appContext.createBed}>Create Bed</button>
    </>
  );
}
