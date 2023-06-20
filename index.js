// 1. a. A date function that returns current day of the week

function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeekIndex = date.getDay();
  return daysOfWeek[dayOfWeekIndex];
}

// 1. b. implementation of the function to display the day of current date
const date = new Date();
const dayOfWeek = getDayOfWeek(date);
console.log("\n Today is ", dayOfWeek);



// 2. a. 