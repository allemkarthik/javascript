// find max  and min number in a array

var arr=[354,54,554,21,46,4]
maxnum=arr[0]
minnum=arr[0]

for(i of arr){
    if (i>maxnum){
        maxnum=i
    }
    else if (i<minnum){
        minnum=i
    }
}
console.log(maxnum,minnum);
