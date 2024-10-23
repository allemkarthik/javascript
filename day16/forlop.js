// task1: add elements in array itertae using for loop and for in loop
const movieNames = [
  "Inception",
  "The Shawshank Redemption",
  "Pulp Fiction",
  "The Godfather",
  "The Dark Knight",
  "Forrest Gump",
  "The Matrix",
  "Fight Club",
  "The Lord of the Rings: The Return of the King",
  "Interstellar",
  "Gladiator",
  "Titanic",
  "The Silence of the Lambs",
  "The Social Network",
  "Avatar",
];
for (i = 0; i < movieNames.length; i++) {
  console.log(movieNames[i]);
  if (movieNames[i] == "Interstellar") {
    console.log(movieNames[i], "excellent movie");
  }
}
console.log("for in loop------------------------------------------------------");

for (j  in movieNames){
    console.log(movieNames[j]);
    if (movieNames[j] == "Avatar") {
      console.log(movieNames[j], "excellent movie");
    }

}
console.log("for of loop----------------------------------------------------------");

for (k of movieNames){
    console.log(k);
    
}
