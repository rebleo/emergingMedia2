// CR video 7.1: What is an array? https://www.youtube.com/watch?v=VIQoUghHSxU
// Allsion Parris' Arrays + Objects: https://creative-coding.decontextualize.com/arrays-and-objects/
//
// make sure yr js is hooked up to yr html file
console.log("hello world!");
//
// Delcalare the array:
let theArray = ["red", "orange", "yellow", "green", "blue", "purple"];
//
// then do am .txt
function setup() {
  createCanvas(windowWidth, windowHeight);

}
//
// don't forget draw is an animation loop
function draw() {
  fill(random(theArray));
  ellipse(mouseX,mouseY, 10,10);
  // background(150);
  noStroke();
  push();
  fill(200,50,150);
  rect(100, 100, 10, 10);
  // fill(random(theArray));
  text("pink", 200, 100);
  pop();
  //
  for (var i = 0; i < theArray.length; i++) {
    fill(theArray[i]);
    text(theArray[i], 50 * i, 250);
  }
}
