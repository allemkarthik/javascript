// diff btn even sum and oddsum


var num="16546"

sumeven=0
sumodd=0

for(i=0;i<num.length;i++){
    if(Number(num[i])%2==0){
        sumeven+=Number(num[i])

    }
    else{
        sumodd+=Number(num[i])
    }
}

console.log(sumeven-sumodd)