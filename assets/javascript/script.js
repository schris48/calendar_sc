// get and format current day
$("#currentDay").text(moment().format('LL'))

// save button handler
$(".saveBtn").on("click", function() {
  var timeKey = $(this).parent().attr("id");
  var textAreaValue = $(this).siblings("textarea").val();
  localStorage.setItem(timeKey, textAreaValue);
})

// store text area value in local storage
$("#time9 textarea").val(localStorage.getItem("time9"))
$("#time10 textarea").val(localStorage.getItem("time10"))
$("#time11 textarea").val(localStorage.getItem("time11"))
$("#time12 textarea").val(localStorage.getItem("time12"))
$("#time13 textarea").val(localStorage.getItem("time13"))
$("#time14 textarea").val(localStorage.getItem("time14"))
$("#time15 textarea").val(localStorage.getItem("time15"))
$("#time16 textarea").val(localStorage.getItem("time16"))
$("#time17 textarea").val(localStorage.getItem("time17"))

// colour timeblock based on time
function updateTimeblock() {
  var hour = moment().hours();
  console.log(hour);
  $(".time-block").each(function(){
    var currentBlock = parseInt($(this).attr("id").split("time")[1]);
    console.log(currentBlock);

    if (currentBlock < hour) {
      $(this).addClass("past")
    } else if(currentBlock === hour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }
    
  })
}
updateTimeblock();