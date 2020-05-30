// array using  loop

var list = [
    "sun", 
    "mon", 
    "the", 
    "wed", 
    "thu",
    "fri", 
    "sat", 

];
var length = list.length;// only one time
 for( var i=0 ; i<length;i++){
//for (var  i=(list.length -1); i>=0; i--){
    console.log("element at",i,"index is",list[i]);
}