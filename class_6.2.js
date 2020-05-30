// advance array manipulation

var my_list  = ["apple","orang","banana","grape"];
my_list[my_list.length]="mango";

my_list.push("pineapple"); // add the list last
my_list.unshift("plum"); // add the list first

my_list.pop(); //  delete the last element in the list
my_list.shift(); // delete the first element in the list

console.log(my_list.length);
var first_element = my_list.shift();

console.log(first_element);
console.log(my_list.length);


console.log(my_list);