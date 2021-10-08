/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var triangle = [];
    for(var r = 0; r < numRows; r++){
        var newRow = [];
        for(var c = 0; c <= r; c++){ 
            if(r == 0 || c-1 < 0 || c == r){
                newRow.push(1);
            }else{
                newRow.push(triangle[r-1][c] + triangle[r-1][c-1]);
            }
        }
        triangle.push(newRow);
    }
    return triangle;
};

console.log(generate(5));