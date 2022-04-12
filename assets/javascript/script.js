var events = {}
var today = document.querySelector("#currentDay");

let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${day}-${month}-${year}`;
console.log(fullDate);

$(".row").on("click", "div", function() {
  var text = $(this)
  .text()
  .trim();

  var textInput = $("<textarea>")
  .addClass("formal-control")
  .val(text);
  $(this).replaceWith(textInput);
  console.log(textInput);
});  

// var createCurrentDayEl = function() {
//   var 
// }