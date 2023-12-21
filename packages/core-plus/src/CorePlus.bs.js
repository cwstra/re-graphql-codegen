// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Js_math = require("rescript/lib/js/js_math.js");
var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Core__Dict = require("@rescript/core/src/Core__Dict.bs.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Core__Error = require("@rescript/core/src/Core__Error.bs.js");
var Core__Option = require("@rescript/core/src/Core__Option.bs.js");
var Core__Result = require("@rescript/core/src/Core__Result.bs.js");
var Core__Ordering = require("@rescript/core/src/Core__Ordering.bs.js");

function $$setTimeout$1(prim0, prim1) {
  return setTimeout(prim0, prim1);
}

function setTimeoutFloat(prim0, prim1) {
  return setTimeout(prim0, prim1);
}

function $$clearTimeout$1(prim) {
  clearTimeout(prim);
}

function $$setInterval$1(prim0, prim1) {
  return setInterval(prim0, prim1);
}

function setIntervalFloat(prim0, prim1) {
  return setInterval(prim0, prim1);
}

function $$clearInterval$1(prim) {
  clearInterval(prim);
}

function $$encodeURI$1(prim) {
  return encodeURI(prim);
}

function $$decodeURI$1(prim) {
  return decodeURI(prim);
}

function $$encodeURIComponent$1(prim) {
  return encodeURIComponent(prim);
}

function $$decodeURIComponent$1(prim) {
  return decodeURIComponent(prim);
}

function make(length, x) {
  if (length <= 0) {
    return [];
  }
  var arr = new Array(length);
  arr.fill(x);
  return arr;
}

function fromInitializer(length, f) {
  if (length <= 0) {
    return [];
  }
  var arr = new Array(length);
  for(var i = 0; i < length; ++i){
    arr[i] = f(i);
  }
  return arr;
}

function equalFromIndex(a, b, _i, eq, len) {
  while(true) {
    var i = _i;
    if (i === len) {
      return true;
    }
    if (!eq(a[i], b[i])) {
      return false;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function equal(a, b, eq) {
  var len = a.length;
  if (len === b.length) {
    return equalFromIndex(a, b, 0, eq, len);
  } else {
    return false;
  }
}

function compareFromIndex(a, b, _i, cmp, len) {
  while(true) {
    var i = _i;
    if (i === len) {
      return 0;
    }
    var c = cmp(a[i], b[i]);
    if (c !== 0) {
      return c;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function compare(a, b, cmp) {
  var lenA = a.length;
  var lenB = b.length;
  if (lenA < lenB) {
    return -1;
  } else if (lenA > lenB) {
    return 1;
  } else {
    return compareFromIndex(a, b, 0, cmp, lenA);
  }
}

function indexOfOpt(arr, item) {
  var index = arr.indexOf(item);
  if (index !== -1) {
    return index;
  }
  
}

function lastIndexOfOpt(arr, item) {
  var index = arr.lastIndexOf(item);
  if (index !== -1) {
    return index;
  }
  
}

function reduce(arr, init, f) {
  return arr.reduce(f, init);
}

function reduceWithIndex(arr, init, f) {
  return arr.reduce(f, init);
}

function reduceRight(arr, init, f) {
  return arr.reduceRight(f, init);
}

function reduceRightWithIndex(arr, init, f) {
  return arr.reduceRight(f, init);
}

function findIndexOpt(array, finder) {
  var index = array.findIndex(finder);
  if (index !== -1) {
    return index;
  }
  
}

function swapUnsafe(xs, i, j) {
  var tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
}

function shuffle(xs) {
  var len = xs.length;
  for(var i = 0; i < len; ++i){
    swapUnsafe(xs, i, Js_math.random_int(i, len));
  }
}

function toShuffled(xs) {
  var result = xs.slice();
  shuffle(result);
  return result;
}

function filterMapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0; i < l; ++i){
    var v = a[i];
    var v$1 = f(v);
    if (v$1 !== undefined) {
      r[j] = Caml_option.valFromOption(v$1);
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function filterMap(a, f) {
  return filterMapU(a, (function (a) {
                return f(a);
              }));
}

function keepSome(__x) {
  return filterMap(__x, (function (x) {
                return x;
              }));
}

function findMap(arr, f) {
  var _i = 0;
  while(true) {
    var i = _i;
    if (i === arr.length) {
      return ;
    }
    var r = f(arr[i]);
    if (r !== undefined) {
      return r;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function takeDropWhile(arr, fn) {
  var ind = arr.findIndex(function (e) {
        return !fn(e);
      });
  if (ind === -1) {
    return [
            arr,
            []
          ];
  } else {
    return [
            arr.slice(0, ind),
            arr.slice(ind)
          ];
  }
}

var $$Array$1 = {
  make: make,
  fromInitializer: fromInitializer,
  equalFromIndex: equalFromIndex,
  equal: equal,
  compareFromIndex: compareFromIndex,
  compare: compare,
  indexOfOpt: indexOfOpt,
  lastIndexOfOpt: lastIndexOfOpt,
  reduce: reduce,
  reduceWithIndex: reduceWithIndex,
  reduceRight: reduceRight,
  reduceRightWithIndex: reduceRightWithIndex,
  findIndexOpt: findIndexOpt,
  swapUnsafe: swapUnsafe,
  shuffle: shuffle,
  toShuffled: toShuffled,
  filterMapU: filterMapU,
  filterMap: filterMap,
  keepSome: keepSome,
  findMap: findMap,
  takeDropWhile: takeDropWhile
};

var put = ((dict, key, value) => ({...dict, [key]: value}));

var merge = ((d1, d2) => ({...d1, ...d2}));

var update = ((dict, key, fn) => ({...dict, [key]: fn(dict[key])}));

var Dict = {
  $$delete: Core__Dict.$$delete,
  put: put,
  merge: merge,
  update: update
};

function ok_or(opt, err) {
  if (opt !== undefined) {
    return {
            TAG: "Ok",
            _0: Caml_option.valFromOption(opt)
          };
  } else {
    return {
            TAG: "Error",
            _0: err
          };
  }
}

var apply = ((mFn, a) => mFn?.(a));

var apply2 = ((mFn, a, b) => mFn?.(a, b));

function toArray(opt) {
  if (opt !== undefined) {
    return [Caml_option.valFromOption(opt)];
  } else {
    return [];
  }
}

var $$Option = {
  filter: Core__Option.filter,
  forEach: Core__Option.forEach,
  getExn: Core__Option.getExn,
  mapOr: Core__Option.mapOr,
  mapWithDefault: Core__Option.mapWithDefault,
  map: Core__Option.map,
  flatMap: Core__Option.flatMap,
  getOr: Core__Option.getOr,
  getWithDefault: Core__Option.getWithDefault,
  orElse: Core__Option.orElse,
  isSome: Core__Option.isSome,
  isNone: Core__Option.isNone,
  equal: Core__Option.equal,
  compare: Core__Option.compare,
  ok_or: ok_or,
  apply: apply,
  apply2: apply2,
  toArray: toArray
};

function traverse(arr, fn) {
  return arr.reduce((function (res, ele) {
                return Core__Result.flatMap(res, (function (arr) {
                              return Core__Result.map(fn(ele), (function (a) {
                                            arr.push(a);
                                            return arr;
                                          }));
                            }));
              }), {
              TAG: "Ok",
              _0: []
            });
}

var Result = {
  getExn: Core__Result.getExn,
  mapOr: Core__Result.mapOr,
  mapWithDefault: Core__Result.mapWithDefault,
  map: Core__Result.map,
  flatMap: Core__Result.flatMap,
  getOr: Core__Result.getOr,
  getWithDefault: Core__Result.getWithDefault,
  isOk: Core__Result.isOk,
  isError: Core__Result.isError,
  equal: Core__Result.equal,
  compare: Core__Result.compare,
  forEach: Core__Result.forEach,
  mapError: Core__Result.mapError,
  traverse: traverse
};

function partition(arr, fn) {
  var lefts = [];
  var rights = [];
  arr.forEach(function (elem) {
        var l = fn(elem);
        if (l.TAG === "Left") {
          lefts.push(l._0);
          return ;
        }
        rights.push(l._0);
      });
  return [
          lefts,
          rights
        ];
}

var Either = {
  partition: partition
};

function compare$1(a, b) {
  if (Caml_obj.equal(a, b)) {
    return 0;
  } else if (Caml_obj.lessthan(a, b)) {
    return -1;
  } else {
    return 1;
  }
}

var Ordering = {
  isLess: Core__Ordering.isLess,
  isEqual: Core__Ordering.isEqual,
  isGreater: Core__Ordering.isGreater,
  invert: Core__Ordering.invert,
  fromInt: Core__Ordering.fromInt,
  compare: compare$1
};

var Console;

var $$DataView;

var $$Date;

var $$Error;

var Float;

var Int;

var $$BigInt;

var $$Math;

var Null;

var Nullable;

var $$Object;

var $$Promise;

var $$RegExp;

var $$String;

var $$Symbol;

var Type;

var $$JSON;

var Iterator;

var AsyncIterator;

var $$Map;

var $$WeakMap;

var $$Set;

var $$WeakSet;

var $$ArrayBuffer;

var TypedArray;

var $$Float32Array;

var $$Float64Array;

var $$Int8Array;

var $$Int16Array;

var $$Int32Array;

var $$Uint8Array;

var $$Uint16Array;

var $$Uint32Array;

var $$Uint8ClampedArray;

var $$BigInt64Array;

var $$BigUint64Array;

var $$Intl;

var MapperRt;

var Internal;

var Re;

var Exn;

var List;

var panic = Core__Error.panic;

exports.$$setTimeout = $$setTimeout$1;
exports.setTimeoutFloat = setTimeoutFloat;
exports.$$clearTimeout = $$clearTimeout$1;
exports.$$setInterval = $$setInterval$1;
exports.setIntervalFloat = setIntervalFloat;
exports.$$clearInterval = $$clearInterval$1;
exports.$$encodeURI = $$encodeURI$1;
exports.$$decodeURI = $$decodeURI$1;
exports.$$encodeURIComponent = $$encodeURIComponent$1;
exports.$$decodeURIComponent = $$decodeURIComponent$1;
exports.$$Array = $$Array$1;
exports.Console = Console;
exports.$$DataView = $$DataView;
exports.$$Date = $$Date;
exports.$$Error = $$Error;
exports.Float = Float;
exports.Int = Int;
exports.$$BigInt = $$BigInt;
exports.$$Math = $$Math;
exports.Null = Null;
exports.Nullable = Nullable;
exports.$$Object = $$Object;
exports.$$Promise = $$Promise;
exports.$$RegExp = $$RegExp;
exports.$$String = $$String;
exports.$$Symbol = $$Symbol;
exports.Type = Type;
exports.$$JSON = $$JSON;
exports.Iterator = Iterator;
exports.AsyncIterator = AsyncIterator;
exports.$$Map = $$Map;
exports.$$WeakMap = $$WeakMap;
exports.$$Set = $$Set;
exports.$$WeakSet = $$WeakSet;
exports.$$ArrayBuffer = $$ArrayBuffer;
exports.TypedArray = TypedArray;
exports.$$Float32Array = $$Float32Array;
exports.$$Float64Array = $$Float64Array;
exports.$$Int8Array = $$Int8Array;
exports.$$Int16Array = $$Int16Array;
exports.$$Int32Array = $$Int32Array;
exports.$$Uint8Array = $$Uint8Array;
exports.$$Uint16Array = $$Uint16Array;
exports.$$Uint32Array = $$Uint32Array;
exports.$$Uint8ClampedArray = $$Uint8ClampedArray;
exports.$$BigInt64Array = $$BigInt64Array;
exports.$$BigUint64Array = $$BigUint64Array;
exports.$$Intl = $$Intl;
exports.MapperRt = MapperRt;
exports.Internal = Internal;
exports.Re = Re;
exports.Exn = Exn;
exports.List = List;
exports.panic = panic;
exports.Dict = Dict;
exports.$$Option = $$Option;
exports.Result = Result;
exports.Either = Either;
exports.Ordering = Ordering;
/* No side effect */
