class MonthException {
  constructor(message) {
    this.message = message;
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  month = month - 1;
  let months = [
    "jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[month] !== undefined) {
    return months[month];
  } else {
    throw new MonthException("Incorrect month number");
  }
}

try {
  let myMonth = 5;
  let monthName = showMonthName(myMonth);
  console.log(monthName);
} catch (e) {
  console.log(e.name, e.message);
}
