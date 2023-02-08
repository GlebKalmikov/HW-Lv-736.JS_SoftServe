let date = new Date();
let currentHour = date.getHours();
if (currentHour >= 23 || currentHour <= 5) {
  alert("Доброї ночі");
} else if (currentHour > 5 && currentHour <= 11) {
  alert("Доброго ранку");
} else if (currentHour > 11 && currentHour <= 17) {
  alert("Доброго дня");
} else if (currentHour > 17 && currentHour <= 23) {
  alert("Доброго вечора");
}

switch (true) {
  case currentHour >= 23 || currentHour <= 5:
    alert("Доброї ночі");
    break;
  case currentHour > 5 && currentHour <= 11:
    alert("Доброго ранку");
    break;
  case currentHour > 11 && currentHour <= 17:
    alert("Доброго дня");
    break;
  case currentHour > 17 && currentHour <= 23:
    alert("Доброго вечора");
    break;
}
