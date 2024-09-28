// prime number program



var num="15"
count=0
for (i=2;i<=num-1;i++){
    if (num%i==0){
        count++
        console.log("num is not prime");
        break
        
    }

}
if(count==0){
    console.log("prime")
}