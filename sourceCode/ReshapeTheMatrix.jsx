/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    var m = mat.length;
    var n = mat[0].length;
    if(r*c == m*n){
        var flatMat = [];
        for(var iM = 0; iM < m; iM++){
            for(var iN = 0; iN < n; iN++){
                flatMat.push(mat[iM][iN]);
            }
        }
        var fMI = 0;
        var newMat = [];
        for(var iR = 0; iR < r; iR++){
            newMat.push([flatMat[fMI]]);
            fMI++;
            for(var iC = 1; iC < c; iC++){
                newMat[iR].push(flatMat[fMI]);
                fMI++;
            }
        }
        return newMat;
    }
    return mat;
};

console.log("mat = [[1,2],[3,4]], r = 1, c = 4, result = [" + matrixReshape([[1,2],[3,4]], 1, 4) + "]");
