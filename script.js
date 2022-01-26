
// Provides date in Mon 00th 0000 format //
$("#currentDay").text(moment().format("MMM Do YYYY"));



var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
updatetime();

//this updated the time for current day 
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

// this saves to local storage user input //
$(".saveBtn").on("click", function () {
  var timeOfday = $(this).parent().attr("id");
  var textContent = $(this).siblings("textarea").val().trim();
  console.log(timeOfday);

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

// Getting individual children and setting to parent //
$("#9").children("textarea").val(localStorage.getItem("9"));

$("#10").children("textarea").val(localStorage.getItem("10"));

$("#11").children("textarea").val(localStorage.getItem("11"));

$("#12").children("textarea").val(localStorage.getItem("12"));

$("#13").children("textarea").val(localStorage.getItem("13"));

$("#14").children("textarea").val(localStorage.getItem("14"));

$("#15").children("textarea").val(localStorage.getItem("15"));

$("#16").children("textarea").val(localStorage.getItem("16"));
$("#17").children("textarea").val(localStorage.getItem("17"));
