
function dateParser(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var date = new Date(date);
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  var finalString = (monthNames[monthIndex] + " " + day.toString() + ", " + year.toString());

  return finalString
}
