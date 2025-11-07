import { useAppContext } from "../../AppContext";
import { useValue } from "../../utils/useValue";
import { Bed } from "./Bed";

export const Room = () => {
  const appContext = useAppContext();
  const beds = useValue(appContext.beds);

  return (
    <>
      {beds.map((bed) => {
        return <Bed key={bed.id} x={bed.x} y={bed.y} />;
      })}
    </>
  );
};
