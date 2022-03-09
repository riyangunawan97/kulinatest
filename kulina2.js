function isShuffledSubstring(s, t){
    var i = 0;
    var j = 0;
    var result = "";
    s = s.split("").sort().join('');
    t = t.split("").sort().join('');
    while (j < t.length)
    {
        if (s[i] != t[j] || i == s.length){
            result += t[j];
        }
        else{
            i++;
        }
        j++;
    }
        return result;
}
const prompt = require("prompt-sync")({sigint: true});
var s = prompt("s: ") 
var t = prompt("t: ") 
console.log('Input: '+ 's = ' + '"' + s +'", '+ 't = ' +'"' + t +'"' );
console.log('Output: ' + '"' +isShuffledSubstring(s, t) + '"' );