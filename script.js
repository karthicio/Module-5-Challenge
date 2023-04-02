// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

console.log(dayjs().hour());

// set from 9am to 5pm
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var hour9 = document.getElementById("hour-9").querySelector("button");
  hour9.addEventListener("click", function() {
    var hour9notes = document.getElementById("hour-9").querySelector("textarea").value;
    localStorage.setItem('9hour', hour9notes);
  });
  var hour10 = document.getElementById("hour-10").querySelector("button");
  hour10.addEventListener("click", function() {
    var hour10notes = document.getElementById("hour-10").querySelector("textarea").value;
    localStorage.setItem('10hour', hour10notes);
  });
  var hour11 = document.getElementById("hour-11").querySelector("button");
  hour11.addEventListener("click", function() {
    var hour11notes = document.getElementById("hour-11").querySelector("textarea").value;
    localStorage.setItem('11hour', hour11notes);
  });
  var hour12 = document.getElementById("hour-12").querySelector("button");
  hour12.addEventListener("click", function() {
    var hour12notes = document.getElementById("hour-12").querySelector("textarea").value;
    localStorage.setItem('12hour', hour12notes);
  });
  var hour1 = document.getElementById("hour-1").querySelector("button");
  hour1.addEventListener("click", function() {
    var hour1notes = document.getElementById("hour-1").querySelector("textarea").value;
    localStorage.setItem('1hour', hour1notes);
  });
  var hour2 = document.getElementById("hour-2").querySelector("button");
  hour2.addEventListener("click", function() {
    var hour2notes = document.getElementById("hour-2").querySelector("textarea").value;
    localStorage.setItem('2hour', hour2notes);
  });
  var hour3 = document.getElementById("hour-3").querySelector("button");
  hour3.addEventListener("click", function() {
    var hour3notes = document.getElementById("hour-3").querySelector("textarea").value;
    localStorage.setItem('3hour', hour3notes);
  });
  var hour4 = document.getElementById("hour-4").querySelector("button");
  hour4.addEventListener("click", function() {
    var hour4notes = document.getElementById("hour-4").querySelector("textarea").value;
    localStorage.setItem('4hour', hour4notes);
  });
  var hour5 = document.getElementById("hour-5").querySelector("button");
  hour5.addEventListener("click", function() {
    var hour5notes = document.getElementById("hour-5").querySelector("textarea").value;
    localStorage.setItem('5hour', hour5notes);
  });
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //If time is before scheduler range
  var hour = parseInt(dayjs().hour());
  if (hour < 9) {
    document.getElementById("hour-9").className = "row time-block future";
    document.getElementById("hour-10").className = "row time-block future";
    document.getElementById("hour-11").className = "row time-block future";
    document.getElementById("hour-12").className = "row time-block future";
    document.getElementById("hour-1").className = "row time-block future";
    document.getElementById("hour-2").className = "row time-block future";
    document.getElementById("hour-3").className = "row time-block future";
    document.getElementById("hour-4").className = "row time-block future";
    document.getElementById("hour-5").className = "row time-block future";
  };
  //If time is after scheduler range
  if (hour > 18) {
    document.getElementById("hour-9").className = "row time-block past";
    document.getElementById("hour-10").className = "row time-block past";
    document.getElementById("hour-11").className = "row time-block past";
    document.getElementById("hour-12").className = "row time-block past";
    document.getElementById("hour-1").className = "row time-block past";
    document.getElementById("hour-2").className = "row time-block past";
    document.getElementById("hour-3").className = "row time-block past";
    document.getElementById("hour-4").className = "row time-block past";
    document.getElementById("hour-5").className = "row time-block past";
  };
  //checks what time is and adjusts within scheduler
  switch(hour) {
    case 9:
      document.getElementById("hour-9").className = "row time-block present";
      document.getElementById("hour-10").className = "row time-block future";
      document.getElementById("hour-11").className = "row time-block future";
      document.getElementById("hour-12").className = "row time-block future";
      document.getElementById("hour-1").className = "row time-block future";
      document.getElementById("hour-2").className = "row time-block future";
      document.getElementById("hour-3").className = "row time-block future";
      document.getElementById("hour-4").className = "row time-block future";
      document.getElementById("hour-5").className = "row time-block future";
      break;
    case 10:
      document.getElementById("hour-9").className = "row time-block past";
      document.getElementById("hour-10").className = "row time-block present";
      document.getElementById("hour-11").className = "row time-block future";
      document.getElementById("hour-12").className = "row time-block future";
      document.getElementById("hour-1").className = "row time-block future";
      document.getElementById("hour-2").className = "row time-block future";
      document.getElementById("hour-3").className = "row time-block future";
      document.getElementById("hour-4").className = "row time-block future";
      document.getElementById("hour-5").className = "row time-block future";
      break;
    case 11:
      document.getElementById("hour-9").className = "row time-block past";
      document.getElementById("hour-10").className = "row time-block past";
      document.getElementById("hour-11").className = "row time-block present";
      document.getElementById("hour-12").className = "row time-block future";
      document.getElementById("hour-1").className = "row time-block future";
      document.getElementById("hour-2").className = "row time-block future";
      document.getElementById("hour-3").className = "row time-block future";
      document.getElementById("hour-4").className = "row time-block future";
      document.getElementById("hour-5").className = "row time-block future";
      break;
    case 12:
      document.getElementById("hour-9").className = "row time-block past";
      document.getElementById("hour-10").className = "row time-block past";
      document.getElementById("hour-11").className = "row time-block past";
      document.getElementById("hour-12").className = "row time-block present";
      document.getElementById("hour-1").className = "row time-block future";
      document.getElementById("hour-2").className = "row time-block future";
      document.getElementById("hour-3").className = "row time-block future";
      document.getElementById("hour-4").className = "row time-block future";
      document.getElementById("hour-5").className = "row time-block future";
      break;
    case 13:
      document.getElementById("hour-9").className = "row time-block past";
      document.getElementById("hour-10").className = "row time-block past";
      document.getElementById("hour-11").className = "row time-block past";
      document.getElementById("hour-12").className = "row time-block past";
      document.getElementById("hour-1").className = "row time-block present";
      document.getElementById("hour-2").className = "row time-block future";
      document.getElementById("hour-3").className = "row time-block future";
      document.getElementById("hour-4").className = "row time-block future";
      document.getElementById("hour-5").className = "row time-block future";
      break;
    case 14:
      document.getElementById("hour-9").className = "row time-block past";
      document.getElementById("hour-10").className = "row time-block past";
      document.getElementById("hour-11").className = "row time-block past";
      document.getElementById("hour-12").className = "row time-block past";
      document.getElementById("hour-1").className = "row time-block past";
      document.getElementById("hour-2").className = "row time-block present";
      document.getElementById("hour-3").className = "row time-block future";
      document.getElementById("hour-4").className = "row time-block future";
      document.getElementById("hour-5").className = "row time-block future";
      break;
    case 15:
      document.getElementById("hour-9").className = "row time-block past";
      document.getElementById("hour-10").className = "row time-block past";
      document.getElementById("hour-11").className = "row time-block past";
      document.getElementById("hour-12").className = "row time-block past";
      document.getElementById("hour-1").className = "row time-block past";
      document.getElementById("hour-2").className = "row time-block past";
      document.getElementById("hour-3").className = "row time-block present";
      document.getElementById("hour-4").className = "row time-block future";
      document.getElementById("hour-5").className = "row time-block future";
      break;
    case 16:
      document.getElementById("hour-9").className = "row time-block past";
      document.getElementById("hour-10").className = "row time-block past";
      document.getElementById("hour-11").className = "row time-block past";
      document.getElementById("hour-12").className = "row time-block past";
      document.getElementById("hour-1").className = "row time-block past";
      document.getElementById("hour-2").className = "row time-block past";
      document.getElementById("hour-3").className = "row time-block present";
      document.getElementById("hour-4").className = "row time-block future";
      document.getElementById("hour-5").className = "row time-block future";
      break;
    case 17:
      document.getElementById("hour-9").className = "row time-block past";
      document.getElementById("hour-10").className = "row time-block past";
      document.getElementById("hour-11").className = "row time-block past";
      document.getElementById("hour-12").className = "row time-block past";
      document.getElementById("hour-1").className = "row time-block past";
      document.getElementById("hour-2").className = "row time-block past";
      document.getElementById("hour-3").className = "row time-block past";
      document.getElementById("hour-4").className = "row time-block present";
      document.getElementById("hour-5").className = "row time-block future";
      break;
    case 18:
      document.getElementById("hour-9").className = "row time-block past";
      document.getElementById("hour-10").className = "row time-block past";
      document.getElementById("hour-11").className = "row time-block past";
      document.getElementById("hour-12").className = "row time-block past";
      document.getElementById("hour-1").className = "row time-block past";
      document.getElementById("hour-2").className = "row time-block past";
      document.getElementById("hour-3").className = "row time-block past";
      document.getElementById("hour-4").className = "row time-block past";
      document.getElementById("hour-5").className = "row time-block present";
      break;
  }
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  console.log(localStorage.getItem('9hour'));
  document.getElementById("hour-9").querySelector("textarea").innerText = localStorage.getItem('9hour')
  document.getElementById("hour-10").querySelector("textarea").innerText = localStorage.getItem('10hour')
  document.getElementById("hour-11").querySelector("textarea").innerText = localStorage.getItem('11hour')
  document.getElementById("hour-12").querySelector("textarea").innerText = localStorage.getItem('12hour')
  document.getElementById("hour-1").querySelector("textarea").innerText = localStorage.getItem('1hour')
  document.getElementById("hour-2").querySelector("textarea").innerText = localStorage.getItem('2hour')
  document.getElementById("hour-3").querySelector("textarea").innerText = localStorage.getItem('3hour')
  document.getElementById("hour-4").querySelector("textarea").innerText = localStorage.getItem('4hour')
  document.getElementById("hour-5").querySelector("textarea").innerText = localStorage.getItem('5hour')

  // TODO: Add code to display the current date in the header of the page.
  //Current Date apply to header
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'))

});
