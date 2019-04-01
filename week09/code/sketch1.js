var theEarthImage, theMoonImage, theSunImage;
var theEarth, theMoon, theSun;
// we can declare an empty array to anticipate future (user) data
var thePix = [];

function preload() {
  theEarthImage = loadImage("pix/earth.png");
  theMoonImage = loadImage("pix/moon.png");
  theSunImage = loadImage("pix/sun.png");
  thePix[0] = theEarthImage;
  thePix[1] = theMoonImage;
  thePix[2] = theSunImage;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(15);
  theEarth = image(theEarthImage, 100, 100, 200, 200);
  theMoon = image(theMoonImage, 100, 300, 200, 200);
  theSun = image(theSunImage, 100, 500, 200, 200);
  // for (let i = 0; i < thePix.length; i++) {
  //   for (j = 0; j < windowHeight; j++) {
  //     image(thePix[i], i * 100, 100 * j, 100, 100);
  //   }
  // }
}
