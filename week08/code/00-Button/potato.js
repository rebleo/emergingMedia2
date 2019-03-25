// week 7 - code
console.log("hello worlds!"); 	


let thePrice;
let theQuantity;
let theTotal;

thePrice = prompt("how much is the item?", " ");
theQuantity = 14;
theTotal = thePrice * theQuantity;

console.log(theTotal);



const myButton = document.querySelector("#thisAwesomeButton");
myButton.addEventListener('click', clickButton);

const theText = document.querySelector("h4");

 function clickButton() {
  console.log("‼️");
  // alert("hello worlds");

  // https://developer.mozilla.org/en-US/docs/Web/API/Headers/append
  // theText.append(":   " + theTotal);
}



