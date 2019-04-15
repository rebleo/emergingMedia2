console.log("loaded");
// download library here: https://jquery.com/download/
//
// this is where the JQuery starts - look for the $
$(document).ready(function() {
  console.log("jQ loaded");
  $("#theTest").html("Hello, World!");
  $(".theOtherTest").html("This is the <strong>updated</strong> text!!");
});
// $(".change").on({
//           click: function(){
//             $(this).css("background-color", "red");
//             $(this).css("font-size", "24px");
//             $(this).css("color", "yellow");
//             $(this).css("font-family", "arial");
//           });
$.getJSON("example.json", function(allData) {
  console.log(allData.Dreams);
  var theData = [];
  theData.push(allData.Dreams);
  console.log(theData.length);
  for (var i = 0; i < theData.length; i++) {
    console.log(theData[0][i])
  }
  // creaet an empty arry to push the data into
  var theItems = [];
  $.each(theData.Dreams, function(key, value) {
    theItems.push("<li id='" + key + "'>" + value + "</li>");
  });
  $("<ul/>", {
    "class": "my-new-list",
    html: theItems.join("")
  }).appendTo("body");
});
// https://api.jquery.com/jquery.getjson/
