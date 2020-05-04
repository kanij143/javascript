/* loop condition
 while(condition){
     loop body
 }*/

var i = 0;

while(i<10){
    i++;
    console.log(i);
}

// even number print

var i = 0;
while(i <= 10){
    console.log(i);
    i += 2;
}


//  using break

var i = 0;

while(true){
    console.log(i);

    if(10 == i){
        break;
    }
    i++;
}