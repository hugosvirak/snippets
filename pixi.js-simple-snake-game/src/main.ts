import { Application, Container, Graphics } from "pixi.js";

enum Direction {
  Up,
  Left,
  Down,
  Right
}

type Coordinate = {
   x: number, 
   y: number
}

type Snake = {
  head: Coordinate;
  body: Array<Coordinate>
  direction: Direction
}

function createRandomCoordinate (grid: number) : Coordinate {
  return {
    x: Math.floor(Math.random() * (200 / grid)) * grid,
    y: Math.floor(Math.random() * (200 / grid)) * grid,
  }
}

(async () => {
  const gridCellSize = 20;
  const snake : Snake = {
    head: createRandomCoordinate(gridCellSize),
    body: [],
    direction: Direction.Right
  }

  let food: Coordinate = createRandomCoordinate(gridCellSize);

  window.addEventListener("keydown", (keypress) => {
    if (keypress.key === "ArrowLeft") {
      snake.direction = Direction.Left;
    } else if (keypress.key === "ArrowDown") {
      snake.direction = Direction.Down;
    } else if (keypress.key === "ArrowRight") {
      snake.direction = Direction.Right;
    } else if (keypress.key === "ArrowUp") {
      snake.direction = Direction.Up;
    }
  })

  const app = new Application();

  await app.init({ background: "#1099bb", resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  const snakeHead = new Graphics().rect(0, 0, gridCellSize, gridCellSize).fill("white");
  const foodGraphic = new Graphics().rect(0, 0, gridCellSize, gridCellSize).fill("red");
   
  const bodyGraphic = new Container();
  
  app.stage.addChild(foodGraphic);
  app.stage.addChild(snakeHead);
  app.stage.addChild(bodyGraphic);

  app.ticker.maxFPS = 10

  // Listen for animate update
  app.ticker.add(() => {
    // logic

    if (snake.head.x === food.x && snake.head.y === food.y) {
      snake.body.push({ x: snake.head.x, y: snake.head.y });
      food = createRandomCoordinate(gridCellSize);
    }

    snake.body.unshift({ x: snake.head.x, y: snake.head.y });
    snake.body.pop();

    if (snake.direction === Direction.Up) {
      snake.head.y -= gridCellSize;
    } if (snake.direction === Direction.Left) {
      snake.head.x -= gridCellSize;
    } if (snake.direction === Direction.Down) {
      snake.head.y += gridCellSize;
    } if (snake.direction === Direction.Right) {
      snake.head.x += gridCellSize;
    }

    if (snake.body.some((body) => body.x === snake.head.x && body.y === snake.head.y)) {
      snake.body = [];
      snake.head = createRandomCoordinate(gridCellSize);
    }

    // rendering
    snakeHead.position.set(snake.head.x, snake.head.y);
    foodGraphic.position.set(food.x, food.y);

    bodyGraphic.removeChildren();
    for (const body of snake.body) {
      const snakeBody = new Graphics().rect(body.x, body.y, gridCellSize, gridCellSize).fill("grey");
      bodyGraphic.addChild(snakeBody);
    }

  });
})();
