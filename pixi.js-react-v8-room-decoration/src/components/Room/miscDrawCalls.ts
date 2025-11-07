import type { Graphics } from "pixi.js";

export function drawBed(graphics: Graphics) {
  graphics.roundRect(0, 0, 100, 180, 4);
  graphics.fill({ color: "rgb(226, 226, 226)" });
  graphics.roundRect(2, 2, 96, 36, 5);
  graphics.fill({ color: "rgba(99, 99, 99, 1)" });
}

export function drawFridge(graphics: Graphics) {
  graphics.roundRect(0, 0, 50, 50, 4);
  graphics.fill({ color: "rgb(226, 226, 226)" });
  graphics.roundRect(1, 1, 3, 49, 4);
  graphics.fill({ color: "rgba(138, 193, 255, 1)" });
}

export function drawBedsideTable(graphics: Graphics) {
  graphics.roundRect(0, 0, 50, 50, 4);
  graphics.fill({ color: "rgba(53, 28, 0, 1)" });
}
