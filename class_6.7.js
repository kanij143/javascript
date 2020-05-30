//array merge 

var list1 = [
    "sun", //0 = -7
    "mon", //1 = -6
    "the", //2 = -5
];

var list2 = [
    "wed", //3 = -4
    "thu", //4 = -3
];

var list3 = [
    "fri", //5 = -2
    "sat", //6 = -1

];

var list = list1.concat(list2,list3);

console.log(list);