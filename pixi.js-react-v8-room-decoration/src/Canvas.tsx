import { Container, Graphics } from "pixi.js";
import { Application as PixiCanvas, extend } from "@pixi/react";
import { Bed } from "./Bed";

extend({
  Container,
  Graphics,
});

export const Canvas = () => {
  return (
    <PixiCanvas>
      <Bed />
    </PixiCanvas>
  );
};
