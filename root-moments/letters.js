var Letter;
var Arrow;
var homeButton;
var font;
let messages = [
  "Congratss KYYY!! I know this is a mile stone that I'll have to get over but, all I want you to be is my little 3 years old again with Big Puff Ponytails. We're so Proud to be your Parents ! Next up is College in August!! -Love, Mom & Dad",
  "We're all super proud of you and your hard work paying off. College is gonna be a blast, full of new experiences and adventures!- Love, Aunt Jock",
  "Enjoy every moment, make memories, and DONT MOVE BACK lol. Here's to the start of an awesome journey ahead!- Love,Aunt Nicki & Debbie"
];
let currentMessageIndex = 0;
let speed = 2; 
let index = 0;

function preload(){
  Letter = loadImage("img/handholdingletter-button.png");
  Arrow = loadImage("img/Arrow3.png");
  font = loadFont("fonts/HomemadeApple-Regular.ttf");
}

function setup() {
  createCanvas(1440, 1024);
  fill(236, 4, 4);
  textSize(18);
  textFont(font);
  textLeading(40);
}

function draw() {
  background(255);

  // Draw the letter and arrow images
  image(Letter, 364.67, 179.42, 794.92, 848.7);  
  image(Arrow, 660.6, 115.91, 104.15, 0);

  // Draw the current message
  text(messages[currentMessageIndex].substring(0, index), 413.23, 287.76, 261.34, 345.45);  

  // Typewriter effect
  if (frameCount % speed == 0 && index < messages[currentMessageIndex].length) {
    index++;
  }
}

function doubleClicked() {
  if (mouseX >= 660.6 && mouseX <= 764.75 && mouseY >= 115.91 && mouseY <= 115.91 + 104.15) {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length; // 
    index = 0;
  }
}




