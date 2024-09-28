// # find fibnoacci series of a number

// # 5   0+1+1+2+3+5

function fibn(n){
    if (n<=0){
        return 0
        
    }
    else if(n==1){
        return 1
    }
    else{
        return fibn(n-1)+fibn(n-2)
    }

}
console.log(fibn(10));
