// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables (once)
let heliImg = document.createElement("img");
heliImg.src = "img/heliGreenTransparent.png";

let mouseIsPressed = false;

let explosion = document.createElement("audio");
explosion.src = "sound/explosion.wav";

let propeller = document.createElement("audio");
propeller.src = "sound/propeller.wav";

//global variables (reset)
let state;
let heli;
let wall1, wall2, wall3;
let distance;
let best = 0;
reset();

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start"){
    drawStart();
  } else if (state === "gameon") {
     runGame()
  } else if ( state === "gameover") {
    drawGameOver();
  }
 
  // Request Animation Frame
  requestAnimationFrame(draw);
}

//event stuff
document.addEventListener("mousedown",mousedownHandler);
document.addEventListener("mouseup",mouseupHandler);

function mousedownHandler() {
  mouseIsPressed = true; 

  //play propeller
  propeller.currentTime = 0;
  propeller.play();
  
  //start game on mouse down
  if (state === "start") {
    state = "gameon"
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
  propeller.pause()
}







