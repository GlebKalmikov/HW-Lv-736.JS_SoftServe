class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    return super.showFullName() + " " + midleName;
  }

  showCourse() {
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear - this.year;
  }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
let stud2 = new Student("Serhii", "Serhienko", 2016);
console.log(stud2.showFullName("Serhiovych"));
console.log("Current course: " + stud2.showCourse());
