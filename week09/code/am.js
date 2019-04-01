const amandaArray = ["We walked up to the stage. It was so noisy in the room. Over half the seats were empty.", "He was leaning against a wall and his eyes were closing and rolling. His hair was longer. I asked him if he drank and did drugs and he said all of them.", "We were sitting on a brownstone stoop, laughing. A woman walked out of the house and stood in front of us. She pulled up the bottoms of her tight black pants to show us her thin muscled calves.", "I was on a journey with my parents. They were trying to save me."];

function setup() {
	  createCanvas(windowWidth, windowHeight);
	  background(150);
	  console.log(random(amandaArray))

}

function draw() {
  background(150);
  for ( var i = 0; i < amandaArray.length; i++){
  	 text(amandaArray[i], 100,100*i);
  }
 
}