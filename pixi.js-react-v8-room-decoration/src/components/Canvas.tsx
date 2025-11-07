import { Container, Graphics } from "pixi.js";
import { Application as PixiCanvas, extend } from "@pixi/react";
import { Room } from "./Room";

extend({
  Container,
  Graphics,
});

export const Canvas = () => {
  return (
    <PixiCanvas backgroundColor={"rgb(255, 253, 234)"} backgroundAlpha={0}>
      <Room />
    </PixiCanvas>
  );
};
