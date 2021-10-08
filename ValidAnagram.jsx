/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    for(var i = 0; i < t.length; i++){
        if(s.includes(t[i])==false){
            return false;
        }else{
            var indexInS = s.indexOf(t[i]);
            s = s.slice(0, indexInS) + magazine.slice(indexInS+1, s.length);
        }
    }
    return s.length==0 ? true : false;
};