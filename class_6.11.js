// string to array and array to string

var s = "hello world, how r you?";
var a =s.split(" ");
console.log(a[3]);

var ns = a.join("-");
console.log(ns);

console.log("i am a girl".split(" ").join("."));


// string revers

var n = "kanij fatema";
var rev = n.split("").reverse().join("");

console.log(rev);