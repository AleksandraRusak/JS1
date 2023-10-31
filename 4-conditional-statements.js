// Programming is all about writing commands which computers can understand
// in a human-readable way. One of the most comman tasks we are faced with is
// decision making and that decision making often becomes the core of a program.
//
// In JavaScript, and most other programming languages, the if-statement is meant
// to be readable in a natural-language way. For example, you might say "If I'm tired,
// make coffee". This can easily be written in JavaScript in an if-statement following
// similar wording:
//
//   const developerIsTired = true
//
//   if (developerIsTired) {
//     console.log("Make coffee!")
//   }
//
// You could also handle the "developer isn't tired" case using the keyword `else`:
//
//   if (developerIsTired) {
//     console.log("Make coffee!")
//   } else {
//     console.log("Make tea!")
//   }

// Task: Below is a variable which stores the speed a car is travelling. Write an if statement
// below the varaible which prints "Slow down!" if the car is travelling above 100, or
// prints "Carry on" if it's travelling below 100.
//
// Take a look at this page on number comparison operators to see how to check if number is
// greater than or less than another number: https://www.w3schools.com/js/js_comparisons.asp

const carSpeed = 85;
if (carSpeed > 100) {
  console.log("Slow down!");
} else {
  console.log("Carry on");
}
