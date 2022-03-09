function newArr(input){
    var out = [] ;
    for(let i = 1 ; i <= input ; i++){
        if(i % 3 == 0  && i % 5 == 0){
            out.push("Kulina x Food");
        }else if(i % 5 == 0 ){
            out.push("Food");
        }else if(i % 3 == 0 ){
            out.push("Kulina");
        }else{
            out.push(i.toString());
        }
    }
    return out;
}
const prompt = require("prompt-sync")({sigint: true});
var input = prompt("Input:")
console.log("Output:");
console.log(newArr(input));