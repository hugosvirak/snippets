import { useAppContext } from "../AppContext";

export function Ui() {
  const appContext = useAppContext();

  return (
    <>
      <button
        onClick={() => {
          appContext.createObject("FRIDGE");
        }}
      >
        Create Fridge
      </button>
      <button
        onClick={() => {
          appContext.createObject("BED");
        }}
      >
        Create Bed
      </button>
      <button
        onClick={() => {
          appContext.createObject("BEDSIDE_TABLE");
        }}
      >
        Create Bedside Table
      </button>
    </>
  );
}
