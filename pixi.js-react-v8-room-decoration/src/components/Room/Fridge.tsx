import { FederatedPointerEvent, Graphics } from "pixi.js";
import { useCallback, useRef } from "react";
import { useAppContext } from "../../AppContext";

export const Fridge = (props: { id: number; x: number; y: number }) => {
  const appContext = useAppContext();
  const graphics = useRef<Graphics>(null);

  const drawCallback = useCallback((graphics: Graphics) => {
    graphics.clear();
    graphics.roundRect(0, 0, 50, 50, 4);
    graphics.fill({ color: "rgb(226, 226, 226)" });
    graphics.roundRect(1, 1, 3, 49, 4);
    graphics.fill({ color: "rgba(138, 193, 255, 1)" });
  }, []);

  return (
    <pixiGraphics
      eventMode="static"
      ref={graphics}
      x={props.x}
      y={props.y}
      cursor="pointer"
      draw={drawCallback}
      onPointerDown={(pointer: FederatedPointerEvent) => {
        if (graphics === null || graphics.current === null) {
          return;
        }

        const local = pointer.getLocalPosition(graphics.current);
        appContext.selectObject({
          cursorId: pointer.pointerId,
          objectId: props.id,
          x: local.x,
          y: local.y,
        });
      }}
    />
  );
};
