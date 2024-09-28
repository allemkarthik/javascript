// count vowels in string


function find(word){

    vowels=['a','e','i','o','u']
    count=0

    for (i=0;i<word.length;i++){
        if(vowels.includes(word[i])){
            count++
            
        }
        
    }
    console.log(count);

}
find("karthik")