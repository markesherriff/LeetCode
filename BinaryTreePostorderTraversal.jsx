var postorderTraversal = function(root) {
  let res = [];
  if (root === null) return res;
  return dfs(root, res);
};

var dfs = function(root, res) {
    if (root == null) return res;
    left = dfs(root.left, res);
    right = dfs(root.right, left);
    res.push(root.val);
    return res;
}