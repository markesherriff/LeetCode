/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(var ransomIndex = 0; ransomIndex < ransomNote.length; ransomIndex++){
        if(magazine.includes(ransomNote[ransomIndex])==false){
            return false;
        }else{
            var indexInMagazine = magazine.indexOf(ransomNote[ransomIndex]);
            magazine = magazine.slice(0, indexInMagazine) + magazine.slice(indexInMagazine+1, magazine.length);
        }
    }
    return true;
};

console.log(canConstruct("aa", "ab"));

