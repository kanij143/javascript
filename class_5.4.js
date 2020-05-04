// for loop and break

var i;

for(i = 0; i <10; i++){
    console.log(i);
}

console.log("\n reset \n")


// using break

var i;
i = 0;

for(;;){
    i++;
    console.log(i);

    if(10 == i){
        break;
    }
}

console.log("\n odd number \n")


// odd number print

var i;

for(i=0; i<=10; i +=3){
    console.log(i);
}
