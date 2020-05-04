// multipication print using for loop

var series;
var j,i;
for(i = 1; i<= 10; i++){
    series = i + " : ";
    for(j = 1; j<10; j++){
        series = series + i * j +" ";
    }
    console.log(series);

}