// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtn = $('.saveBtn');
var currentDay = $('#currentDay');
var description = $('.description');


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  textInput();

  function textInput() {
    $('.saveBtn').on('click', function () {
      var $el = $(this);
      var time = $el.parent().attr('id');
      var planDay = $el.siblings('.description').val();
      localStorage.setItem(time, planDay);
    });
  }






  // saveBtn.on('click', function() {
  //   console.log(textValue);
  //   var textValue = $(this).siblings('.description').val();
  //   console.log(timeKey);
  //   var timeKey = $(this).parent().attr('id');

  //   localStorage.setItem(timeKey, textValue);
  // });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  var timeBlocks = $('.time-block'); 
  var currentTime= daysjs().hour();

    timeBlocks.each(function () {
     console.log(this.id);
     var blockId = parseInt(this.id.split('-')[1]);
     console.log(blockId);
      if (blockId < currentTime) {
         $(this).addClass('past');
      } else if (blockId === currentTime) {
       $(this).addClass('present');
       $(this).removeClass('future');
       $(this).removeClass('past');
      } else {
       $(this).addClass('future');
       $(this).removeClass('past');
       $(this).removeClass('present');
      }
   });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  $('.time-block').each(function() {
    var time = $el.attr('id');
    var $el = $(this);
    var planDay = localStorage.getItem(time);
    $el.children('.description').val(planDay);
  })
  // TODO: Add code to display the current date in the header of the page.
  var planToday = dayjs();
  $('#currentDay').text(planToday.format('dddd,MMMM D YYYY'));
});
