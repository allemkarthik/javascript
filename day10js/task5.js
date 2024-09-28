// Task 5:  Vowels Function
// Scenario: Create a function that takes a string as an argument and returns weather the strings contains vowels or not .
// Task:
// Define a function that takes one parameter str.
// The function should return whether string contains vowels or not.
// use loops and if conditions
// Call the function with different strings and print the results.
// hello --a,e ,i ,o,u---it contains vowels
// hll---it doesnt contains vowels




function finding(word){
    vowels=['a','e','i','o','u'];
    
    vowel=false;

    for(var i=0;i<word.length;i++){
        if(vowels.includes(word[i])){
            vowel=true;
            break;
        }
            
    }
    if(vowel){
       return  `${word} it has vowels`
        
        
        
        
    }
    else{
        return `${word} it does not have vowels`;
    }

}
console.log(finding('hll'))
console.log(finding('hello'))
console.log(finding('karthik'))
console.log(finding('sai'))
console.log(finding('john'))


