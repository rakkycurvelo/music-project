// Multimedia Programming
// Assignment 3 /
// 2957739 – Raquelline Curvelo - raquelline.curvelo@student.griffith.ie

//my colour pattern: https://coolors.co/bdbb96-858585-555756-ffffff-ddd5b5
//convertion tool: https://www.webpagefx.com/web-design/hex-to-rgb/

//my variables
var acustic;
var acusticButton;
var drums;
var drumsButton;
var flutes;
var flutesButton;
var guitar;
var guitarButton;
var keys;
var keysButton;
var sax;
var saxButton;
var tamb;
var tambButton;
var notes;
var notesButton;
var eraseButton;
var erase;
var pen;
var penButton;
var myfont;
var sizeSlider;
var eraseSize = 5;
var eraseSlider;
var penSize = 5;
var penSlider;
var wipe;
var wipeButton;
var mode = 0;

//my preload content - Here, I preload every image and font that I'll use in my sketch
function preload () {
  acustic = loadImage ("assets/acustic.png");
  drums = loadImage ("assets/drums.png");
  flutes = loadImage ("assets/flutes.png");
  guitar = loadImage ("assets/guitar.png");
  keys = loadImage ("assets/keys.png");
  sax = loadImage ("assets/sax.png");
  tamb = loadImage ("assets/tamb.png");
  notes = loadImage ("assets/notes.png");
  pen = loadImage ("assets/pen.png");
  erase = loadImage ("assets/erase.png");
  wipe = loadImage ("assets/wipe.png");
  myfont = loadFont ("assets/music.ttf");
}

//my setup (all the things that only happens once!
function setup() {
createCanvas(1300,850);
background(240);

/*About the buttons: all of them have a none background and border, because I don't want that the user sees them as
simple buttons, but as the images that the user can draw, making the process a little bit intuitive
*/

//acustic guitar button
acusticButton = createButton("");
acusticButton.position(10,height-40);
acusticButton.size(50,50);
acusticButton.style("background", "none");
acusticButton.style("border", "none");
acusticButton.mousePressed(changeToAcustic);

//drums button
drumsButton = createButton("");
drumsButton.position(70,height-40);
drumsButton.size(50,50);
drumsButton.style("background", "none");
drumsButton.style("border", "none");
drumsButton.position(70,height-40);
drumsButton.mousePressed(changeToDrums);

//flutes button
flutesButton = createButton("");
flutesButton.size(50,50);
flutesButton.style("background", "none");
flutesButton.style("border", "none");
flutesButton.position(130,height-40);
flutesButton.mousePressed(changeToFlutes);

//regular guitar button
guitarButton = createButton("");
guitarButton.size(50,50);
guitarButton.style("background", "none");
guitarButton.style("border", "none");
guitarButton.position(190,height-40);
guitarButton.mousePressed(changeToGuitar);

//keys button
keysButton = createButton("");
keysButton.size(50,50);
keysButton.style("background", "none");
keysButton.style("border", "none");
keysButton.position(250,height-40);
keysButton.mousePressed(changeToKeys);

//sax button
saxButton = createButton("");
saxButton.size(50,50);
saxButton.style("background", "none");
saxButton.style("border", "none");
saxButton.position(310,height-40);
saxButton.mousePressed(changeToSax);

//tambourine button
tambButton = createButton("");
tambButton.size(50,50);
tambButton.style("background", "none");
tambButton.style("border", "none");
tambButton.position(350,height-40);
tambButton.mousePressed(changeToTamb);

//musical notes button
notesButton = createButton("");
notesButton.size(50,50);
notesButton.style("background", "none");
notesButton.style("border", "none");
notesButton.position(400,height-40);
notesButton.mousePressed(changeToNotes);

//pen button
penButton = createButton(" ");
penButton.size(50,50);
penButton.style("background", "none");
penButton.style("border", "none");
penButton.position(600, height-40);
penButton.mousePressed(changeToPen);

//erase button
eraseSlider = createSlider(0, 300, 175);
eraseSlider.position(800, height-30);
eraseSlider.style('width', '100px');

//wipe button
wipeButton = createButton(" ");
wipeButton.size(50,50);
wipeButton.style("background", "none");
wipeButton.style("border", "none");
wipeButton.position(920,height-40);
wipeButton.mousePressed(changeToWipe);

//a slider to change the size of the instruments and notes
sizeSlider = createSlider(0, 500, 250);
sizeSlider.position(480, height-30);
sizeSlider.style('width', '100px');

//a slider to change the erase size
eraseButton = createButton(" ");
eraseButton.size(50,50);
eraseButton.style("background", "none");
eraseButton.style("border", "none");
eraseButton.position(760,height-40);
eraseButton.mousePressed(changeToErase);

//a slider to change the pen size
penSlider = createSlider(0, 50, 25);
penSlider.position(650, height-30);
penSlider.style('width', '100px');

}

//my draw function (things that happen continuously)
function draw() {

  //the variables that changes the sliders sizes - I can't put them on my setup, cause I need then to change
  var s = sizeSlider.value();
  penSize = penSlider.value();
  eraseSize = eraseSlider.value();

  //Tool bar background
  fill(0);
  strokeWeight(1);
  rect(0,0,width,70);
  fill(85,87,86);
  strokeWeight(1);
  rect(0,790,width,80);

  /*tool bar images - here, the images that represents the buttons are showing in the sketch in the same positions that my
buttons are, creating the illusion, to the user, that they are the same thing.*/
  image (acustic,10, height-50,50,40);
  image (drums,70, height-50,40,40);
  image (flutes,130, height-50,40,40);
  image (guitar,190, height-50,40,40);
  image (keys,250, height-50,40,40);
  image (sax,310, height-50,40,40);
  image (tamb,350, height-50,40,40);
  image (notes,400, height-50,50,50);
  image (pen,600, height-50,40,40);
  image (erase, 760, height-50,40,40);
  image (wipe, 910, height-50,40,40);

  //tool bar text
  fill(255);
  textFont(myfont);
   

  textSize(12);
  text('Instruments Size', 530, 820);
  text('Pen Size', 700, 820);
  text ('Erase Size', 850, 820);
  text ('Clear All', 1000, 820);

//user actions and conditionals
  if(mouseIsPressed){
    if(mode == 0) {
      image(acustic, mouseX, mouseY, s, s);
      frameRate(10);

    }else if (mode == 1){
      image(drums, mouseX, mouseY, s, s);
      frameRate(10);

    } else if (mode == 2){
      image(flutes, mouseX, mouseY, s, s);
      frameRate(10);


    } else if (mode == 3) {
      image (guitar, mouseX, mouseY,s,s);
      frameRate(10);

    } else if (mode == 4) {
      image (keys, mouseX, mouseY,s,s);
      frameRate(10);


    } else if (mode == 5) {
      image (sax, mouseX, mouseY,s,s);
      frameRate(10);

    } else if (mode == 6) {
      image (tamb, mouseX, mouseY,s,s);
      frameRate(10);

    } else if (mode == 7) {
      strokeWeight(1);
      image(notes, mouseX,mouseY,s,s);
      frameRate(10);

    } else if (mode == 8) {
      fill(240);
      noStroke();
      ellipse (mouseX, mouseY, eraseSize, eraseSize);

    } else if (mode == 9) {
      stroke(random(255), random(255), random(255));
      strokeWeight(penSize);
      line (mouseX + random(15), mouseY + random(15), pmouseX + random(15), pmouseY + random(15));

    } else if (mode == 10) {
      noStroke();
      fill(240);
      rect(0,50,width,height-100);

    }
  }

}

//toolbar functions
function changeToAcustic(){
  mode = 0;
}

function changeToDrums () {
  mode = 1;
}

function changeToFlutes () {
  mode = 2;
}

function changeToGuitar () {
  mode = 3;
}

function changeToKeys () {
  mode = 4;
}

function changeToSax () {
  mode = 5;
}

function changeToTamb () {
  mode = 6;
}

function changeToNotes () {
  mode = 7;
}

function changeToErase () {
  mode = 8;
}

function changeToPen () {
  mode = 9;
}

function changeToWipe () {
  mode = 10;
}
