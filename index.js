

// Get the current date
var currentDate = new Date();
var monthIndex = currentDate.getMonth();

// Create an array of month names
var monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// Get the month name based on the month index
var currentMonth = monthNames[monthIndex];
var heading = document.querySelector('.date h1');
var para= document.querySelector('.date p');

// Set the current month as the inner text of the <h1> element
heading.innerText = currentMonth;
para.innerText = new Date().toDateString();

// Get the day of the current date
var currentDay = currentDate.getDate();

// Get all the day elements in the calendar
//var days = document.querySelectorAll('.days div');
var numberOfDays = new Date(currentDate.getFullYear(), monthIndex + 1, 0).getDate();


// Get all the day elements in the calendar
var daysContainer = document.querySelector('.days');

// Clear the existing day elements
daysContainer.innerHTML = '';

// Loop through each day element
for (var i = 1; i <= numberOfDays; i++) {

    var dayElement = document.createElement('div');
    dayElement.innerText = i;
    daysContainer.appendChild(dayElement);
  // Check if the day matches the current day
  if (i === currentDay) {
    // Add the "today" class to highlight the current day
    dayElement.classList.add('today');
    break; // Exit the loop since the current day is found
  }
}
