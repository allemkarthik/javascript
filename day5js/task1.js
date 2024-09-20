const now = new Date();
const day = now.getDay();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(daysOfWeek[day]);

if (daysOfWeek[day]=="Monday"){
    console.log("hey its "+daysOfWeek[day] + " start your week so strong")
}
else if(daysOfWeek[day]=="Tuesday"){
    console.log("hey its "+daysOfWeek[day] + " keep going! for tuesday")
}
else if(daysOfWeek[day]=="Wednesday"){
    console.log("hey its "+daysOfWeek[day] +" Halfway There!")
}
else if(daysOfWeek[day]=="Thursday"){
    console.log("hey its "+daysOfWeek[day] +" Almost Weekend!")
}
else if(daysOfWeek[day]=="Friday"){
    console.log("hey its "+daysOfWeek[day] +" enjoy your weekend!")
}

else if(daysOfWeek[day]=="Saturday"){
    console.log("hey its "+daysOfWeek[day] +" happy Weekend!")
}
else{
    console.log("hey its "+daysOfWeek[day] + " Happy sunday")
}