//----define moment varibles used to show time----//
//var date = moment().format("MMM Do YY");
// var currentTime = moment().format('H');
// console.log(currentTime);

//-------append date----------//
$("#currentDay").text(moment().format("MMM Do YYYY"));

//---------background Updater------------------------//

var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
updatetime();

function updatetime() {
  var currentTime = moment().hours();

  // use jquery to loop through timeblocks
  $(".time-block").each(function () {
    var gridTime = parseInt($(this).attr("id"));
    if (gridTime < currentTime) {
      $(this).addClass("past");
    } else if (gridTime === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

//--onclick event handler to save user input to local storage---//
$(".saveBtn").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $(this).siblings("textarea").val().trim();
  console.log(timeOfday);

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

//-------Getting individual childern and setting to parent-----//
$("#9").children("textarea").val(localStorage.getItem("9"));

$("#10").children("textarea").val(localStorage.getItem("10"));

$("#11").children("textarea").val(localStorage.getItem("11"));

$("#12").children("textarea").val(localStorage.getItem("12"));

$("#13").children("textarea").val(localStorage.getItem("13"));

$("#14").children("textarea").val(localStorage.getItem("14"));

$("#15").children("textarea").val(localStorage.getItem("15"));

$("#16").children("textarea").val(localStorage.getItem("16"));
$("#17").children("textarea").val(localStorage.getItem("17"));
