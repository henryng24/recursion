// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj, index) {
  if (obj == null) {
    return 'null'
  }
  var stringObj = toString.call(obj);
  var result = toString.call(obj);

  if (stringObj == '[object String]') {
    return '"' + obj + '"'
  }
  index = index || 0
  if (stringObj == '[object Array]') {
    if (index >= obj.length) {
      return '[]'
    }
    result = stringifyJSON(obj[index]);
    if (index < obj.length - 1) {
      result = result + ',' + stringifyJSON(obj, index + 1);
    }
    if (index === 0) {
      return '[' + result + ']'
    }
    return result;
  }


  if (obj === Object(obj)) {
    var keys = Object.keys(obj);
    var key = keys[index];
    var keyValue = obj[key]
    
    if (key === undefined || toString.call(keyValue) == '[object Function]') {
      return '{}'
    }


    if (index === 0) {
      result = '{' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
    } else {
      result = '' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
    }
    if (index < keys.length - 1) {
      return result + ',' + stringifyJSON(obj, index + 1);
    }
    else {

      return result + '}'
    }
    return result;
  }
  return obj.toString();
};
