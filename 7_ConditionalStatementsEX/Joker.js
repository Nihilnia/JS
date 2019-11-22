var month = prompt("Give me a number between 1 - 12");

if (month == 1 || month == 2 || month == 3){
    alert("Winter!");
}else if (month == 4 || month == 5 || month == 6){
    alert("Spring!");
}else if (month == 7 || month == 8 || month == 9){
    alert("Summer!");
}else if (month == 10 || month == 11 || month == 12){
    alert("Fall / Autumn!");
}else{
    alert("You should give between 1- 12!")
}