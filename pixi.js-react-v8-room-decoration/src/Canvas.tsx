import { Container, Graphics } from "pixi.js";
import { useCallback } from "react";
import { Application as PixiCanvas, extend } from "@pixi/react";

extend({
  Container,
  Graphics,
});

export const Canvas = () => {
  const drawCallback = useCallback((graphics: Graphics) => {
    graphics.clear();
    graphics.setFillStyle({ color: "red" });
    graphics.rect(0, 0, 100, 100);
    graphics.fill();
  }, []);

  return (
    <PixiCanvas>
      <pixiContainer x={100} y={100}>
        <pixiGraphics draw={drawCallback} />
      </pixiContainer>
    </PixiCanvas>
  );
};
