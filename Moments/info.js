var inFo;
var dietCoke;
var Dice;
var Headphones;
var Zodiac;
var Polaroid;
var tV;
var Camera;
var hoverText = ""; 
var clickedText = "Default Text"; 
var clicked = false; 
var maxTextWidth = 250; 


function preload(){
  inFo = loadFont("fonts/Boris.ttf");
  dietCoke = loadImage("img/DietCokecan.png");
  Dice = loadImage("img/dice.png");
  Headphones = loadImage("img/headphones.png");
  Zodiac = loadImage("img/cancer.png");
  Polaroid = loadImage("img/polaroid.png");
  tV = loadImage("img/tv.png");
  Camera = loadImage("img/camera.png");
}

function setup() {
  createCanvas(1440,1024);
  textFont(inFo);
  textSize(100);
}

function draw() {
  background(255,255,255);
  fill(213,234,255);
  stroke(236,4,4);
  strokeWeight(4);
  rect(133,135.79,1175,797);
  noStroke(0)
  fill(0)
  textSize(100);
text('Kylah Lindsey', 690, 102.79);
  fill(255,255,255);
  noStroke(0);
  rect(575,365.79,291,275);
  
  // Draw Diet Coke can
  image(dietCoke, 417, 477.79, 229, 229);
  image(Camera,794.27, 404.85,198.39, 229.98);
  image(Dice,547.78, 512.18,230, 230);
  image(Polaroid,522.95, 303.8,127.22, 160.38);
  image(Zodiac,656, 293.79,128, 128);
  image(Headphones,803.03, 260.11,136.52, 145.52);
 image(tV,777, 552,135, 135);
  
  
  // Display text when hovering over images
  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  textLeading(25); // Set line height
  wrappedText(hoverText, 575 + 291 / 2, 365.79 + 275 / 2, maxTextWidth);
  
  // Display clicked text in the middle rectangle if an image is clicked
  if (clicked) {
    textSize(30);
    textAlign(CENTER, CENTER);
    var textX = 575 + 291 / 2;
    var textY = 365.79 + 275 / 2 + 10; // Adjusted to ensure text is positioned below the center
    wrappedText(clickedText, textX, textY, maxTextWidth);
  }
}

function wrappedText(str, x, y, maxWidth) {
  var words = str.split(' ');
  var line = '';
  for (var i = 0; i < words.length; i++) {
    var testLine = line + words[i] + ' ';
    var testWidth = textWidth(testLine);
    if (testWidth > maxWidth && i > 0) {
      text(line, x, y);
      line = words[i] + ' ';
      y += textLeading(); 
    } else {
      line = testLine;
    }
  }
  text(line, x, y);
}

function mouseOverImage(x, y, w, h, text) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    hoverText = text;
  }
}

function mousePressed() {
  // Check if the mouse is clicked on each image
  if (!clicked) {
    mouseOverImage(417, 477.79, 229, 229, "favorite drink");
    mouseOverImage(794.27, 404.85, 198.39, 229.98, "my favorite thrift find");
    mouseOverImage(547.78, 512.18, 230, 230, "Im from Las Vegas");
    mouseOverImage(522.95, 303.8, 127.22, 160.38, "baby ky");
    mouseOverImage(656, 263.79, 128, 128, "Born on July 7th 2003: Sign:Cancer");
    mouseOverImage(803.03, 260.11, 136.52, 145.52, "favorite song rn:Mr Magic-   Amy Winehouse");
    mouseOverImage(777, 552,135, 135, "favorite tv-show rn: Marvelous Mrs.Maisel");
  }

  // Check if the mouse is clicked inside the middle rectangle
  if (mouseX > 575 && mouseX < 575 + 291 && mouseY > 365.79 && mouseY < 365.79 + 275) {
    clicked = !clicked;
    clickedText = hoverText; 
  }
}
