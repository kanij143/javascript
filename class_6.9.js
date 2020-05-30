//array empty element delete

var list = [
    "sun",
    NaN, 
    "mon",
    '',
    null, 
    "the", 
    "wed", 
    "thu",
    "fri", 
    null,
    "sat"

];

console.log(list);

var  new_list = [];

for (i in list){
    if(list[i]){
        new_list.push(list[i]);
    }
}

console.log(new_list);