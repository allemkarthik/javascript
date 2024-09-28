var a="234546937"

even=0
odd=0
for (i=0;i<a.length;i++){
    if(Number(a[i])%2==0){
        console.log(Number(a[i]))
        even+=Number(a[i])
    }
    else{
        console.log(Number(a[i]))
        odd+=Number(a[i])
    }
}

console.log("the even sum in given string",even)
console.log("the odd sum in a string:",odd)