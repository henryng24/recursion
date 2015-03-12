// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

function getElementsByClassName (className) {
  var nodeList = [];
  function test(node) {
    if (node.classList && node.classList.contains(className)) {
      nodeList.push(node);
    }
    for (var index = 0; index < node.childNodes.length; index++) {
      test(node.childNodes[index]);
    }
  }
  test(document.body);
  return nodeList;
};