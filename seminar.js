// check whether given stirg is vowel or not

function find(word){

    vowels=['a','e','i','o','u']
    givenstr=false;
    for (i=0;i<=word.length;i++){
        if (vowels.includes(word[i])){
            givenstr=true
            break;
            
        }
    }
    if(givenstr==true){
        console.log("vowel")
    }
    else{
        console.log("consonent")
    }



}


find("k")