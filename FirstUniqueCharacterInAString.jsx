/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var repeatedLetters = [];
    for(var i = 0; i < s.length; i++){
        for(var repeatI = i+1; repeatI < s.length; repeatI++){
            if(s[i]==s[repeatI]){
                repeatedLetters.push(s[i]);
                break;
            }
        }
        if(repeatedLetters.includes(s[i]) == false) return s.indexOf(s[i]);
    }
    return -1;
};

console.log("leetcode: " + firstUniqChar("leetcode"));
console.log("loveleetcode: " + firstUniqChar("loveleetcode"));