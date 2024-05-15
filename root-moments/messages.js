var Eli;
var Dani;
var Lisa;
var mE;
var Gchat
var spacePressed = false; // Flag to track space bar press

function preload(){
  Eli = loadImage("img/Group-6-2.jpg");
  Dani = loadImage("img/dani-text1.png");
  Lisa = loadImage("img/Lisa-text1.png");
  mE = loadImage("img/me-text1.png");
   Gchat = loadImage("img/groupchat.png");
}

function setup() {
  createCanvas(1440, 1024);
  imageMode(CENTER); // Set image mode to CENTER
  background(255);
}

function draw() {
  background(255); // Clear the background on every frame
  fill(217, 217, 217);
  noStroke();
  rect(0, 0, 1440, 247);
  image(Gchat, 696.3,140.11, 351.04, 212.53);

  if (spacePressed) {
    image(Eli, 742.28, 373, 759.9, 205.13);
  }
  if (spacePressed) {
    image(Dani, 472.28, 603, 214.72, 38.86); 
  }
  if (spacePressed) {
    image(mE, 882, 717, 252, 36);
    
  }
      if (spacePressed) {
    image(Lisa, 502.28, 813.83, 263.72, 36.17);
      }
  if (spacePressed) {
    image(mE, 882, 717, 252, 36);
  }
  
}

function keyPressed() {
  if (keyCode === 32) { // Check if space bar is pressed (keyCode 32)
    spacePressed = !spacePressed; // Toggle the spacePressed flag
  }
}


