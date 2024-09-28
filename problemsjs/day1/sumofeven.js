// sum of even in a number input:546 output:10

var num="546"
evensum=0
for (i=0; i<num.length;i++){
    if (Number(num[i])%2==0){
        evensum+=Number(num[i])
    }

}

console.log(evensum);
