let theRed, theGreen, theBlue, theAlpha;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  // theFace();
  theFace(250, 300);
  // theFace(350, 450);
  // theFace(100, 200);
  for (var i = 0; i < windowWidth; i++) {
    for (var j = 0; j < windowHeight; j++) {
      theFace(i * 100, j * 200);
    }
  }
  // for (var i =0; i <windowWidth; i++){
  //   for(var j = 0; j < 5; j++){
  //       theFace(i* 85, j *10);
  //   }
  
  // }
}

function draw() {
  // frameRate(1);
}

function theFace(x, y) {
  // console.log("My great face!")
  ellipse(x, y, 100, 100)
}
// this function is also an object
function theFace(theX, theY) {
  theRed = random(255);
  theGreen = random(255);
  theBlue = random(255);
  theAlpha = random(1, 245);
  this.x = theX;
  this.y = theY;
  stroke(0);
  fill(theRed, theGreen, theBlue, theAlpha);
  // randomize the size of the face
  let diam = random(25, 150);
  // face a circle
  ellipse(this.x, this.y, diam, diam);
  // stop here and show them
  //for the eyes - relative to the circle
  fill(0);
  ellipse(this.x - diam / 5, this.y - diam / 10, diam / 10, diam / 10);
  ellipse(this.x + diam / 10, this.y - diam / 10, diam / 10, diam / 10);
}
