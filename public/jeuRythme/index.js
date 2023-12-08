import chart from "./chart.js";
// Create the application helper and add its render target to the page

const bouton = document.getElementById("bouton");
bouton.onclick = run

function run() {
    let app = new PIXI.Application({
        width: 900,
        height: 450,
        background: "black",
    });
    document.body.appendChild(app.view);


// Create the sprite and add it to the stage
    let center = PIXI.Sprite.from("ressources/img/bin.png");
    app.stage.addChild(center);
    center.anchor.set(0.5);
    center.width = 60
    center.height = 60

    center.x = app.screen.width / 2;
    center.y = app.screen.height / 2;

    let time = 0;
    let basicText = new PIXI.Text(time);

    basicText.x = 50;
    basicText.y = 100;

    app.stage.addChild(basicText);

    basicText.text = time;

    const audio = new Audio("ndi20231.mp3")
    audio.play()

    let ms = 0;

    function addCube(note) {
        let cube = PIXI.Sprite.from("ressources/img/waste"+Math.floor(Math.random() * 9 + 1)+".png");
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
        if (current) {
            if (current.delais <= ms) {
                addCube(current);
                listeObjets.push(current);
                current = chart.notes.length ? chart.notes.shift():null;
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
            let marge = 60;
            if (event.key == "ArrowRight") {
                if (current.touche == "r" && ms >= current[0].delais-marge && ms <= current[0].delais+marge) {
                    console.log("great")
                }
                else console.log("miss")
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

}