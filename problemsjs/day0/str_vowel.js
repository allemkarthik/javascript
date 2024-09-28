// find given string is vowel or niot

function find(word){
    vowels=['a','e','i','o','u']

    given_sting=false;
    for (i of word){
        if(vowels.includes(i)){
            given_sting=true;
            break;
            


        }
    }
    
    if(given_sting==true){
       return `${word } is a vowel`
        
    }
    
    else{
        return `${word } is  a consonent`
    }
}

console.log(find('karthik'))
console.log(find('kkkkk'))