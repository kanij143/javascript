// Array copy

var list = [
    "sun", //0 = -7
    "mon", //1 = -6
    "the", //2 = -5
    "wed", //3 = -4
    "thu", //4 = -3
    "fri", //5 = -2
    "sat", //6 = -1

];

//var list2=[...list];
var list2 = list.slice();
list2[1] = "no day";

console.log(list,list2);