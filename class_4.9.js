//negative postive numbr cheeck

var n = 12;

if(n > 0){
    var result = "this number" + n + " is positive";
}else{
    var result = "this number" + n + " is negative";
}

console.log(result);


// odd even cheeck

var n = 0;
var result;
var reminder = n % 2;

if(0 == n){
    result="this is a neutral number"
}else if (0 == reminder){
    result="this number is even"
}else{
    result="this number is odd"
}

console.log(result);

// movie watch problem

var movie_rating = "pg";
var age = 18;

if(("pg" == movie_rating && age >= 13) || ("r" == movie_rating && age >= 18) || ("g" == movie_rating)){
    console.log("you can watch this movie");
}else{
    console.log("you can not watch this movie");
}

//age and stages cheeck

var your_age = 18;
var result;

if(your_age <= 1){
    result = "baby";
}else if(your_age <= 12){
    result = "kid";
}else if(your_age <= 18){
    result = "younger";
}else if(your_age >= 18){
    result = "adult";
}

console.log("you are a",result);


















