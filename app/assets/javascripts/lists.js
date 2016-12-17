function List(name, date, id){
  this.name = name;
  this.due_date = date;
  this.id = id
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
      dayString += day.toString();
    } else {
      dayString = day.toString();
    }
    var monthIndex = date.getUTCMonth();
    var year = date.getUTCFullYear();
    var finalString = (monthNames[monthIndex] + " " + dayString + ", " + year.toString());

    return finalString
  }
}
