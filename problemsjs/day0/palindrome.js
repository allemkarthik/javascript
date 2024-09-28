// check whether the given number is palindrome or not

var a="mom"

rev=''

for (i=a.length-1;i>=0;i--){
    rev+=a[i]
}
// console.log(rev);

if (rev==a){
    console.log(a,"is  a palindrome")
}
else{
    console.log("not palindrome")
}