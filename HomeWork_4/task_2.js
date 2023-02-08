function checkAge() {
  try {
    let age = prompt(
      "This movie hes viewing restrictions of up to 14 yers. Please enter your age before continuing:"
    );
    if (age === null || age.trim() === "")
      throw new Error("The field is empty ! Please enter your age");
    else if (isNaN(parseInt(age))) throw new Error("Please enter number");
    else if (age < 14)
      throw new Error("Sorry, but yor are too young for this movis");
    alert("Enjoy the movie!");
  } catch (e) {
    alert(e.name + " " + e.message);
  }
}
checkAge();
