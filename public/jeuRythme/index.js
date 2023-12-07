import obj from "./chart.js";
// Create the application helper and add its render target to the page
let app = new PIXI.Application({
  width: 640,
  height: 460,
  background: "green",
});
document.body.appendChild(app.view);

// Create the sprite and add it to the stage
let center = PIXI.Sprite.from("pixel.png");
let left = PIXI.Sprite.from("pixel.png");
let right = PIXI.Sprite.from("pixel.png");
let up = PIXI.Sprite.from("pixel.png");
let down = PIXI.Sprite.from("pixel.png");

app.stage.addChild(center);
app.stage.addChild(left);
app.stage.addChild(right);
app.stage.addChild(up);
app.stage.addChild(down);

center.x = app.screen.width / 2;
center.y = app.screen.height / 2;

left.y = app.screen.height / 2;

right.y = app.screen.height / 2;
right.x = app.screen.width - 30;

up.x = app.screen.width / 2;

down.y = app.screen.height - 30;
down.x = app.screen.width / 2;

let goRight = false;

let time = 0;
let basicText = new PIXI.Text(time);

basicText.x = 50;
basicText.y = 100;

app.stage.addChild(basicText);

basicText.text = time;

document.addEventListener(
  "keydown",
  (event) => {
    if (event.key == "ArrowRight") {
      alert("ok");
    }
    if (event.key == "ArrowLeft") {
      alert("ok");
    }
    if (event.key == "ArrowUp") {
      alert("ok");
    }
    if (event.key == "ArrowDown") {
      alert("ok");
    }
  },
  false
);

let tableLeft = [];

function slideRight(index, delta) {
  if (tableLeft[index].x < center.x) {
    tableLeft[index].x += 2 * delta;
  }
}

function createCube() {
  let cube = PIXI.Sprite.from("pixel.png");
  app.stage.addChild(cube);
  cube.y = app.screen.height / 2;
  tableLeft.push(cube);
}

function addCube(t, index, delta) {
  if (ms > t && ms <= t + 50) {
    createCube();
  }
  if (ms > t) {
    slideRight(index, delta);
  }
}

let ms = 0;
let index = 0;
app.ticker.maxFPS = 60;
app.ticker.add((delta) => {
  ms = Math.round(ms + 1000 / 60);
  basicText.text = ms;

  addCube(1000, index, delta);
});
