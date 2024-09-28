a=[23,54,67,64,46,95,98]

even=[]
odd=[]
evensum=0
oddsum=0
for (i=0;i<a.length;i++){
    if (a[i]%2==0){
        even+=(a[i]+" ")
       
        evensum+=a[i]
        
    }
    else{
        odd+=(a[i]+" ")
        
        oddsum+=a[i]
    }
}
console.log("the even numbers are:", even)
console.log("the odd numbers are:", odd)
console.log("sum of all even numbrs is:",evensum)
console.log("sum of all odd numbrs is:",oddsum)