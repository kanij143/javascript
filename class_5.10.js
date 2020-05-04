// month print


var month_name = " May 2020";
var days = 31;
var starting_day = 5;

console.log("\n\n Calendar of",month_name,"\n");
console.log("sun   mon   tue   wed   thu   fri   sat");

for(var i=0; i<5; i++){
    var day_row = "";

    for(var j=1; j<=7; j++){
        var current_day = 7*i + j -starting_day;

        if(current_day>days){
            break;

        }else if(current_day<1){
            current_day = " ";
        }
        if(current_day>9){
            day_row += current_day +"    ";
        }else{
            day_row += current_day +"     ";

        }

    }
    console.log(day_row);
}