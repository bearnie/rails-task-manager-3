function List(name, date){
  this.name = name;
  this.due_date = date;
  this.date = function() {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    var date = new Date(this.due_date);
    var utcDate = date.toUTCString()
    var day = date.getUTCDate();
    var dayString = "0"
    if (day < 10) {
      currentDay = day.toString();
      dayString += currentDay

    } else {
      dayString = day.toString();

    }
    var monthIndex = date.getUTCMonth();
    var year = date.getUTCFullYear();
    var finalString = (monthNames[monthIndex] + " " + dayString + ", " + year.toString());

    return finalString
  }

}



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
    var string = "0"
    if (day < 10) {
      currentDay = day.toString();
      string += currentDay
      return string
    } else {
      return day.toString();
    }
  }

  var monthIndex = date.getUTCMonth();
  var year = date.getUTCFullYear();
  var finalString = (monthNames[monthIndex] + " " + formatDay(day) + ", " + year.toString());

  return finalString
}
