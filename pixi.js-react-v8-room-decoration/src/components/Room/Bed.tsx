import { Graphics } from "pixi.js";
import { useCallback } from "react";

export const Bed = (props: { x: number; y: number }) => {
  const drawCallback = useCallback((graphics: Graphics) => {
    graphics.clear();
    graphics.roundRect(0, 0, 100, 180, 4);
    graphics.fill({ color: "rgb(226, 226, 226)" });
    graphics.roundRect(2, 2, 96, 36, 5);
    graphics.fill({ color: "rgba(99, 99, 99, 1)" });
  }, []);

  return <pixiGraphics x={props.x} y={props.y} draw={drawCallback} />;
};
