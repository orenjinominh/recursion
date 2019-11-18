
var stringifyJSON = function(obj) {
  var final = '';

  if (Array.isArray(obj)) {
    final += '[';
    for (var i = 0; i < obj.length; i++) {
      final += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        final += ',';
      }
    }
    final += ']';
  } else if (typeof obj === 'boolean') {
    if (obj) {
      final +='true';
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

