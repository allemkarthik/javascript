var num=11;
count=0
for (i=2;i<num-1;i++){
    if (num%i==0){
        count+=1
        break;

    }
}

if (count==0){
    console.log("prime");
    
}
else{
    console.log("not prime")
}