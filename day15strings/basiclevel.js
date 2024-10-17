// basic level tasks
// task1: take the string convert into uppercase
let str = "karthik";
console.log(str.toUpperCase());
// task2 : to convert it into lower case
let strind = "KARTHIK";
console.log(strind.toLowerCase());
// task3:reverse a string
let kar = "sai karthik";
console.log(kar.split(" ").reverse().join(" "));

// task4 count no of vowels in a string
let sai = "karthik";
vowels = ["a", "e", "i", "o", "u"];
for (i of vowels) {
  console.log(sai.match(i));
  if (sai.includes(i)) {
    console.log(i, "present one time");
  }
}
