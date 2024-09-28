// find number of occurance of a letter in a string

// input:karthik "k" output:2

var str="karthik"
var word="a"
count=0
for (letter of str){
    if (word.includes(letter)){
        count+=1

    }
}
console.log(count);
