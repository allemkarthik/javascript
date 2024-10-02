// // check whether given stirg is vowel or not

// function find(word){

//     vowels=['a','e','i','o','u']
//     givenstr=false;
//     for (i=0;i<=word.length;i++){
//         if (vowels.includes(word[i])){
//             givenstr=true
//             break;
            
//         }
//     }
//     if(givenstr==true){
//         console.log("vowel")
//     }
//     else{
//         console.log("consonent")
//     }
// }
// find("k")


// karthik is study 
// karthik got skils
// karthik got job
// karthik got married

function study(a){
    console.log("karthik is studying");
    a(job)
    
}

function married(){
    console.log("kar got married")
}
function skill(b){
    console.log("kar got skills")
    b(married)
}
function job(c){
    console.log("kar got job")
    c()
}

study(skill)