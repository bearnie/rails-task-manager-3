
function dateParser(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var date = new Date(date);

  var utcDate = date.toUTCString()

  var day = date.getUTCDate();

  function formatDay (day) {
    console.log("inside function " + day)
    var string = "0"
    if (day < 10) {
      console.log("inside if 1")
      currentDay = day.toString();
      string += currentDay
      return string
    } else {
      return day.toString();
    }
  }

  console.log("formatter" + formatDay(day))
  var monthIndex = date.getUTCMonth();

  var year = date.getUTCFullYear();

  var finalString = (monthNames[monthIndex] + " " + formatDay(day) + ", " + year.toString());

  return finalString
}
