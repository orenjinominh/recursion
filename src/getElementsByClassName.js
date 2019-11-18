// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className) {
  var elementsWithClass = [];
  var findElementsWithClass = function(element) {
  	if (element.classList && element.classList.contains(className)) {
  		elementsWithClass.push(element);
  	}
  }
  // if the element has childNotes inside...find em!
  if (elements.childNodes) {
  	for (var i = 0; i < elements.childNodes.length; i++) {
  		findElementsWithClass(elements.childNodes[i]);
  	}
  }
};
