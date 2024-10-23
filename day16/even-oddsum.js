// find even and odd in a array and find evensum and oddsum
let arr=[524,16543,6,4,4,34,654,32,5]
even=0
odd=0
for ( i of arr){
    if (i % 2==0){
        even+=i
    }
    else{
        odd+=i
    }
}
console.log(even,"is even sum")
console.log(odd,"is the odd sum");

