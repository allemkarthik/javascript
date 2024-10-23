// reverse array using push method
const movieNames = [
    "Inception",
    "The Shawshank Redemption",
    "Pulp Fiction",
    "The Godfather",
    "The Dark Knight"
];
rev=[]
for(i=movieNames.length-1;i>=0;i--){
    rev.push(movieNames[i])

}
console.log(rev);
