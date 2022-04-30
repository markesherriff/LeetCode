/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    //find row by iterating through all last indexes
    for(var row = 0; row < m; row++){
        if(matrix[row][n-1] == target){
            return true;
        }else if(matrix[row][n-1] > target){
            //linear search the row
            for(var rowItem = 0; rowItem < n; rowItem++){
                if(matrix[row][rowItem]==target){
                    return true;
                }
            }
            return false;
        }
    }
    return false;
};

console.log(searchMatrix([[1,2]], 2));