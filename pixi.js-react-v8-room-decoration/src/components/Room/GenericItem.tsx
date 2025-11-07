import { FederatedPointerEvent, Graphics } from "pixi.js";
import { useCallback, useRef } from "react";
import { useAppContext, type ObjectType } from "../../AppContext";
import { drawBed, drawBedsideTable, drawFridge } from "./miscDrawCalls";

export const GenericItem = (props: {
  id: number;
  x: number;
  y: number;
  itemType: ObjectType;
}) => {
  const appContext = useAppContext();
  const graphics = useRef<Graphics>(null);

  const drawCallback = useCallback(
    (graphics: Graphics) => {
      graphics.clear();
      if (props.itemType === "BED") {
        drawBed(graphics);
      } else if (props.itemType === "FRIDGE") {
        drawFridge(graphics);
      } else if (props.itemType === "BEDSIDE_TABLE") {
        drawBedsideTable(graphics);
      }
    },
    [props.itemType]
  );

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
