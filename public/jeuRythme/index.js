import chart from "./chart.js";
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
let ms = 0;
let index = 0;

function slideRight(delta) {
  if (tableLeft[index].x < center.x) {
    tableLeft[index].x += 2 * delta;
  }
}

function addCube(note) {
    console.log(note)
    let cube = PIXI.Sprite.from("pixel.png");
  if (note.touche == "t") {
      app.stage.addChild(cube);
      cube.x = app.screen.width / 2;
  }
  else if (note.touche == "b") {
      app.stage.addChild(cube);
      cube.x = app.screen.width / 2;
      cube.y = app.screen.height
  }
  else if (note.touche == "l") {
      app.stage.addChild(cube);
      cube.y = app.screen.height / 2
  }
  else if (note.touche == "r") {
      app.stage.addChild(cube);
      cube.x = app.screen.width - 30
      cube.y = app.screen.height / 2
  }
  note.cube = cube
}

app.ticker.maxFPS = 60;
let current = chart.notes.shift();
console.log(current)
const listeObjets = [];
app.ticker.add((delta) => {
  ms = Math.round(ms + 1000 / 60);
    if (chart.notes.length == 0 && listeObjets.length == 0 ) return;

  basicText.text = ms;
  if (chart.notes.length != 0) {
      if (current.delais <= ms) {
          addCube(current);
          listeObjets.push(current);
          current = chart.notes.shift();
      }}
      if (listeObjets.length > 0 && listeObjets[0].delais + 1500 <= ms) {
          listeObjets.shift();
      }

  listeObjets.forEach(obj => {
      obj.cube.x += 1;
  })
    console.log(listeObjets)
});
