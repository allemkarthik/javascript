// Task 6: Temperature Converter
// Scenario: Create a function that converts temperatures between Celsius and Fahrenheit.
// Task:
// Define a function convertTemperature that takes two parameters: temp (the temperature) and scale (the scale to convert to, either “C” or “F”).
// The function should return the converted temperature.
// Test the function with different temperatures and scales and print the results.
// Hints:-
// formula for celscious (temp - 32) * 5/9
// formula for fahrehnheit (temp * 9/5) + 32

function tempconverter(temp,scale){
    
    if (scale=="f"){
        var fah=(temp*9/5)+32;
        return `${temp} is converted into ${fah} fahrehniet`
        
    }
    else if(scale=="c"){
       var cel= (temp-32)*5/9;
       return `${temp} is converted into ${cel} celsious`

       
   }
   else{
    return "invalid input ! please enter either Celsious or fahrenhiet"
   }

}

console.log(tempconverter(32,"f"));
console.log(tempconverter(35,"c"));
console.log(tempconverter(30));