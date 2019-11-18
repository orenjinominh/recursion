// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // stubs
  // input: object
  // output: string complete with {} and quotes around the object key
  // ie "{'objectkey': property , 'objectkey2': property2 }"
  var objectKeys = Object.keys(obj);
  var propertiesArray = [];
  for (var i = 0; i < objectKeys.length; i++) {
  	
  }

};

