let workersList = [];

class Worker {
  #experience = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
  }
  showSalaryWithExperience() {
    console.log(
      `${this.fullName} salary: ${
        this.dayRate * this.workingDays * this.#experience
      }`
    );
  }
  showSalaryWorker() {
    return `${this.dayRate * this.workingDays * this.#experience}`;
  }
  get showExp() {
    return this.#experience;
  }
  set setExp(experience) {
    this.#experience = experience;
  }

  sortSalaries(workersArray) {
    let sortedSalary = workersArray.sort(function (a, b) {
      return a.showSalaryWorker() - b.showSalaryWorker();
    });
    for (let i = 0; i < sortedSalary.length; i++) {
      console.log(
        sortedSalary[i].fullName + ": " + sortedSalary[i].showSalaryWorker()
      );
    }
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
console.log("--------------");

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
console.log("--------------");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
console.log("--------------");
