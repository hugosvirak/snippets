import { useAppContext, type ObjectType } from "../AppContext";

const UI_LABELS: Record<ObjectType, string> = {
  BED: "Create Bed",
  FRIDGE: "Create Fridge",
  BEDSIDE_TABLE: "Create Bedside Table",
};

const OBJECTS = Object.keys(UI_LABELS) as ObjectType[];

export function Ui() {
  const appContext = useAppContext();

  return (
    <>
      {OBJECTS.map((object: ObjectType) => {
        return (
          <button
            onClick={() => {
              appContext.createObject(object);
            }}
          >
            {UI_LABELS[object]}
          </button>
        );
      })}
    </>
  );
}
