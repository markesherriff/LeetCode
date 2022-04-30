/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var openBrackets = [];
    var closingBracket = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for(var i = 0; i < s.length; i++){
        if(s[i]=='(' || s[i]=='{' || s[i]=='[') openBrackets.push(s[i]);

        if(s[i]==')' || s[i]=='}' || s[i]==']'){
            console.log(openBrackets[openBrackets.length-1] + " & " + s[i]);
            if(s[i]==closingBracket[openBrackets[openBrackets.length-1]]) openBrackets.pop();
            else return false;
        }
    }
    if(openBrackets.length!=0) return false;
    return true;
};

console.log("() = " + isValid("()"));