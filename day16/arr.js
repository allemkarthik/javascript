
// 5) Take a heterogenious array and separate each data type into new array
// hints : use loop, typeof and push method 
// inp: let arr = ["apple", "banana", "mango", "banana", 3, 4, 5, 6, true, {name: "object"}];
// out : 
// num=[3,4,5,6]
// str=["apple","banana","mango","banana"]
// bool=[true]
// // 
let arr = ["apple", "banana", "mango", "banana", 3, 4, 5, 6, true, {name: "object"},[1,2,3]];
str=[]
num=[]
bool=[]
obj=[]
arr2=[]
for(i of arr){
    if(i===String(i)){
        str.push(i)
    }
    else if(i===Number(i)){
        num.push(i)
    }
    else if(i===Boolean(i)){
        bool.push(i)

    }
    else if(i===Object(i)){
        if(Array.isArray(i)){
            arr2.push(i)
        }
        else{
            obj.push(i["name"])
        }
    }
    
}
console.log(str);
console.log(num);
console.log(bool);
console.log(obj);
console.log(arr2);
