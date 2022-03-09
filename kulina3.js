const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
function romanToInt(s) {
    let result = 0;
    for (let i = 0 ; i < s.length ; i++){
        const cur = romanHash[s[i]];
        const next = romanHash[s[i+1]];
        if(cur < next){
            result += next - cur
            i++
        }else{
            result += cur
        }
    }
    return result;
}
const prompt = require("prompt-sync")({sigint: true});
var s = prompt("s: ") 
console.log('Input: '+ 's = ' + '"' + s +'"' );
console.log('Output: ' + romanToInt(s));