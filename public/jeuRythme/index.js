import chart from "./chart.js";
import PIXI from "pixi.js"
// Create the application helper and add its render target to the page
let app = new PIXI.Application({
    width: 900,
    height: 450,
    background: "green",
});
document.body.appendChild(app.view);


// Create the sprite and add it to the stage
let center = PIXI.Sprite.from("pixel.png");

app.stage.addChild(center);

center.x = app.screen.width / 2;
center.y = app.screen.height / 2;

let goRight = false;

let time = 0;
let basicText = new PIXI.Text(time);

basicText.x = 50;
basicText.y = 100;

app.stage.addChild(basicText);

basicText.text = time;

let ms = 0;

function addCube(note) {
    console.log(note)
    let cube = PIXI.Sprite.from("pixel.png");
    if (note.touche == "t") {
        app.stage.addChild(cube);
        cube.x = app.screen.width / 2;
        cube.y = 0;
    } else if (note.touche == "b") {
        app.stage.addChild(cube);
        cube.x = app.screen.width / 2;
        cube.y = app.screen.height
    } else if (note.touche == "l") {
        app.stage.addChild(cube);
        cube.y = app.screen.height / 2
        cube.x = 0;
    } else if (note.touche == "r") {
        app.stage.addChild(cube);
        cube.x = app.screen.width
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
    if (chart.notes.length == 0 && listeObjets.length == 0) return;

    basicText.text = ms;
    if (chart.notes.length != 0) {
        if (current.delais <= ms) {
            addCube(current);
            listeObjets.push(current);
            current = chart.notes.shift();
        }
    }
    if (listeObjets.length > 0 && listeObjets[0].delais + 1920 <= ms) {
        listeObjets[0].cube.destroy()
        listeObjets.shift();
    }

    listeObjets.forEach(obj => {
        if (obj.touche == "l") {
            obj.cube.x += 4;
        }
        else if (obj.touche == "r") {
            obj.cube.x -= 4;
        }
        else if (obj.touche == "t") {
            obj.cube.y += 2;
        }
        else if (obj.touche == "b") {
            obj.cube.y -= 2;
        }
    })
    console.log(listeObjets)
});


document.addEventListener(
    "keydown",
    (event) => {
        if (event.key == "ArrowRight") {

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
