var males = ["shamim","karim","rahima","rahim"]
var females = ["riya","priya"]

//var last_person = males.pop();
//females.push(person_to_remove);

var person_to_remove = males[3];
females.push(person_to_remove);

//delete(males[2]);
males.splice(2,1);

console.log(males,females);
console.log(males.length,females.length);