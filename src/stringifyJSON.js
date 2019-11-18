
var stringifyJSON = function(obj) {
  // ALTERNATE CODE FOR FUN
  // if (obj === null) {
  // 	return 'null';
  // }

  // if (typeof obj === 'boolean') {
  // 	if (obj) {
  //     return 'true';
  //   } else {
  //     return 'false'; 
  //   }
  // }

  // if (typeof(obj) === 'undefined' || typeof(obj) === 'function') {
  // 	return '';
  // }

  // if (typeof(obj) === 'string') {
  // 	return '"' + obj + '"';
  // }

  // if (Array.isArray(obj)) {
  //   var stringArr = [];

  //   obj.forEach(function(element){
  //     stringArr.push(stringifyJSON(element));
  //   })
  //   return '[' + stringArr.toString() + ']';
  // }

  // if (obj && typeof(obj) === 'object') {
  //   var objString = '';
  //   var keys = Object.keys(obj);
  //   keys.forEach(function(key) {
  //   	if (typeof(key) === 'function' || typeof(key) === 'undefined' || typeof(obj[key]) === 'function' || typeof(obj[key]) === 'undefined') {
  //   		return '';
  //   	} else {
  //         objString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
  //   	}
  //   })
  //   return '{' + objString.slice(0, objString.length - 1) + '}';
  // }

  // return String(obj);


  var final = '';

  if (Array.isArray(obj)) {
    var stringArr = [];

    obj.forEach(function(element){
      stringArr.push(stringifyJSON(element));
    });
    return "[" + stringArr.toString() + "]";
  } else if (typeof obj === 'boolean') {
    if (obj) {
      final += 'true';
    } else {
      final += 'false';
    }
  } else if (obj === undefined) {
    return 'undefined';
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    final += '"' + obj + '"';
  } else if (typeof obj === 'number') {
    final += String(obj);
  } else if (obj && typeof obj === 'object') {
    final += '{';
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        final += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }
    if (final.charAt(final.length - 1) === ',') {
      final = final.slice(0, final.length - 1);
    }
    final += '}';
  } 
  return final;

};

