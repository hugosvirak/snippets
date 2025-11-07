import { extend, useApplication } from "@pixi/react";
import { useAppContext } from "../../AppContext";
import { useValue } from "../../utils/useValue";
import { Container, FederatedPointerEvent } from "pixi.js";
import { GenericItem } from "./GenericItem";

extend({ Container });

export const Room = () => {
  const app = useApplication();
  const appContext = useAppContext();
  const objects = useValue(appContext.objects);

  if (app.isInitialised === false) {
    return <></>;
  }

  return (
    <pixiContainer
      eventMode="static"
      cursor="pointer"
      hitArea={app.app.screen}
      onPointerUp={(pointer: FederatedPointerEvent) => {
        appContext.unselect(pointer.pointerId);
      }}
      onPointerUpOutside={(pointer: FederatedPointerEvent) => {
        appContext.unselect(pointer.pointerId);
      }}
      onPointerMove={(pointer: FederatedPointerEvent) => {
        appContext.moveObject(
          pointer.pointerId,
          pointer.global.x,
          pointer.global.y
        );
      }}
    >
      {objects.map((item) => {
        return (
          <GenericItem
            key={item.id}
            id={item.id}
            x={item.x}
            y={item.y}
            itemType={item.type}
          />
        );
      })}
    </pixiContainer>
  );
};
