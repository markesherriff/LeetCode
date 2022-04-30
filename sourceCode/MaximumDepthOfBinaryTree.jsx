var maxDepth = function(root) {
    let result = resolve(root);
    return result;
};

function resolve(root){
    if(root == null) {
        return 0;
    }
    let left = resolve(root.left) + 1;
    let right = resolve(root.right) + 1;
    return Math.max(left, right);    
}