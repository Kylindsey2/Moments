var babyKy;
var Layerimg;
var rad = 40;
var layer;
var Img1;
var mouseIsDragged = false;

function preload() {
  babyKy = loadImage("img/babyky.png");
  Layerimg = loadImage("img/img1.png"); 
  Img1 = loadImage("img/image2.png");
}

function setup() {
  createCanvas(1440, 1024);
  pixelDensity(1);
  var w = 1440,
    h = 1024; 
  layer = createGraphics(w, h);
  layer.image(Layerimg, 0, 0, w, h);

  
}

function draw() {
  noStroke();
 image(Img1, 94.55, 93.78, 1269.13, 812.9); 
  image(layer,  94.55, 93.78, 1269.13, 812.9); 



  if (mouseIsPressed) {
    noFill();
    ellipse(mouseX, mouseY, rad, rad);
    eraseLayer(mouseX, mouseY);
  }
}

function eraseLayer(x, y) {
  layer.loadPixels();
  var originalLayerPixels = Layerimg.get(); 
  for (var i = x - rad; i < x + rad; i++) {
    for (var j = y - rad; j < y + rad; j++) {
      if (dist(i, j, x, y) < rad && i > 0 && i < width && j > 0 && j < height) {
        var index = (i + j * width) * 4;
        layer.pixels[index] = originalLayerPixels[index]; 
        layer.pixels[index + 1] = originalLayerPixels[index + 1]; 
        layer.pixels[index + 2] = originalLayerPixels[index + 2]; 
        layer.pixels[index + 3] = originalLayerPixels[index + 3]; 
      }
    }
  }
  layer.updatePixels();
}


