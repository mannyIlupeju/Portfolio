"use strict";

//for toggle state
// const toggleSwitch = $("#checkbox");
$("#checkbox").on("click", function () {
  if ($(this).is(':checked')) {
    whiteBackground();
  } else {
    blackBackground();
  }
});
$("#menu-bars").on("click", function () {
  $(this).css("display", "none");
  $("#times-bar").css("display", "block");
  $('.nav-responsive-menu').removeClass('show');
});
$('#times-bar').click(function () {
  $(this).css("display", "none");
  $('#menu-bars').css('display', 'block');
  $('.nav-responsive-menu').addClass('show');
});

function whiteBackground() {
  $(document.body).addClass("checkedBackground");
  $(".headline").css("color", "white");
  $(".bio").css("color", "white");
  $(".manny-logo").attr("src", "mannylogo/3dmannylogo2.gif");
  $(".skill-list").css("color", "white");
  $(".project-section").css("color", "white");
  $(".cards").css("border", "2px solid red");
  $(".cta").css("color", "white");
}

function blackBackground() {
  $(document.body).removeClass("checkedBackground");
  $(".headline").css("color", "black");
  $(".bio").css("color", "black");
  $(".manny-logo").attr("src", "mannylogo/3dmannylogo.gif");
  $(".skill-list").css("color", "black");
  $(".project-section").css("color", "black");
  $(".cards").css("border", "2px solid red");
  $(".cta").css("color", "black");
  $(".submit-text").css("color", "white");
  $(".date").css("color", "white");
} // var dateTime = new Date();
// const dates = document.querySelector('dates')
// var strDate = dateTime.getFullYear();
// function displayDate(){
// return $(".dates").text(strDate);
// }
// displayDate() 
//Date


var dates = document.querySelector('.date');

var dateRightsReserved = function dateRightsReserved() {
  var d = new Date();
  var todaysDate = d.getFullYear();
  return dates.innerHTML = "\n    ".concat(todaysDate, " Manny Ilupeju. All rights reserved\n  ");
};

dateRightsReserved();
//# sourceMappingURL=portfolio.dev.js.map
