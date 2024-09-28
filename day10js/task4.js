// Task 4: Average Function
// Scenario: Create a function that takes an array of numbers as an argument and returns the average.
// Task:
// hint:[2,5,2] =9/3=3
// Define a function average that takes one parameter arr.
// The function should return the average of the numbers in arr.
// Call the function with different arrays and print the results.


var sum=0
function avg(arr){
    for (i =0;i<arr.length;i++){
        sum+=arr[i]
        average=sum/arr.length

    }
}
avg([2,5,6,4,8,6])
console.log("the sum of the list is:",sum);
console.log("the avarage of given list is:",average)
