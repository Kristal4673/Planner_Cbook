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

//--onclick event to save user input to local storage---//
$(".rowBtn").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $("input").val().trim();

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

//-------Getting individual childern and setting to parent-----//
$("#9am").children("input").val(localStorage.getItem("9am"));

$("#10am").children("input").val(localStorage.getItem("10am"));

$("#11am").children("input").val(localStorage.getItem("11am"));

$("#12pm").children("input").val(localStorage.getItem("12pm"));

$("#1pm").children("input").val(localStorage.getItem("1pm"));

$("#2pm").children("input").val(localStorage.getItem("2pm"));

$("#3pm").children("input").val(localStorage.getItem("3pm"));

$("#4pm").children("input").val(localStorage.getItem("4pm"));

$("#5pm").children("input").val(localStorage.getItem("5pm"));
