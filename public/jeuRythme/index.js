import chart from "./chart.js";
// Create the application helper and add its render target to the page

const bouton = document.getElementById("bouton");
bouton.onclick = run;
function run() {

  bouton.remove();
  let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight - 5,
    background: "black",
  });
  document.body.appendChild(app.view);

  // Create the sprite and add it to the stage
  let center = PIXI.Sprite.from("/img/bin.png");
  app.stage.addChild(center);
  center.anchor.set(0.5);
  center.width = 60;
  center.height = 60;

  center.x = app.screen.width / 2;
  center.y = app.screen.height / 2;

  const speedY = app.screen.height / 200;
  const speedX = app.screen.width / 200;

  const audio = new Audio("/sound/ndi20231.mp3");
  audio.play();

  let ms = 0;
  let lose = false;

  function addCube(note) {
    let cube = PIXI.Sprite.from(
      "/img/waste" + Math.floor(Math.random() * 9 + 1) + ".png"
    );
    cube.width = 50;
    cube.height = 50;
    cube.anchor.set(0.5);
    if (note.touche == "t") {
      app.stage.addChild(cube);
      cube.x = app.screen.width / 2;
      cube.y = 0;
    } else if (note.touche == "b") {
      app.stage.addChild(cube);
      cube.x = app.screen.width / 2;
      cube.y = app.screen.height;
    } else if (note.touche == "l") {
      app.stage.addChild(cube);
      cube.y = app.screen.height / 2;
      cube.x = 0;
    } else {
      app.stage.addChild(cube);
      cube.x = app.screen.width;
      cube.y = app.screen.height / 2;
    }
    note.cube = cube;
  }

  app.ticker.maxFPS = 60;
  let current = chart.notes.shift();
  const listeObjets = [];

  const delay = 2000;
  const delaiX = delay - speedX * 30;
  const delaiY = delay - speedY * 50;
  let highScore = 0;

  app.ticker.add((_) => {
    if(lose) { return }
    ms = Math.round(ms + 1000 / 60);
    if (chart.notes.length == 0 && listeObjets.length == 0) return;

    if (current) {
      if (current.delais <= ms) {
        addCube(current);
        listeObjets.push(current);
        current = chart.notes.length ? chart.notes.shift() : null;
      }
    }
    if (listeObjets.length > 0) {
      if (["l", "r"].includes(listeObjets[0].touche)) {
        if (listeObjets[0].delais + delaiX <= ms) {
          listeObjets[0].cube.destroy();
          listeObjets.shift();
          lose = true;
        }
      } else {
        if (listeObjets[0].delais + delaiY <= ms) {
          listeObjets[0].cube.destroy();
          listeObjets.shift();
          lose = true
        }
      }
    }
    listeObjets.forEach((obj) => {
      if (obj.touche == "l") {
        obj.cube.x += speedX;
      } else if (obj.touche == "r") {
        obj.cube.x -= speedX;
      } else if (obj.touche == "t") {
        obj.cube.y += speedY;
      } else if (obj.touche == "b") {
        obj.cube.y -= speedY;
      }
    });

  });

  const centreTime = 1500;
  document.addEventListener(
    "keydown",
    (event) => {
      if (listeObjets.length == 0) return;
      const curr = listeObjets[0];
      if (
        (event.key == "ArrowRight" &&
          ms - curr.delais >= centreTime &&
          curr.touche === "r") ||
        (event.key == "ArrowLeft" &&
          ms - curr.delais >= centreTime &&
          curr.touche === "l") ||
        (event.key == "ArrowUp" &&
          ms - curr.delais >= centreTime &&
          curr.touche === "t") ||
        (event.key == "ArrowDown" &&
          ms - curr.delais >= centreTime &&
          curr.touche === "b")
      ) {
        curr.cube.destroy();
        listeObjets.splice(
          listeObjets.findIndex((a) => (a.delais = curr.delais)),
          1
        );
        highScore++;
      }
    },
    false
  );
}
