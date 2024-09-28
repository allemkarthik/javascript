// # find sum of odd numbers
var num="546";

sumodd=0

for(i=0;i<num.length;i++){
    if(Number(num[i])%2==1){
        sumodd+=Number(num[i])
    }
}
console.log(sumodd);
