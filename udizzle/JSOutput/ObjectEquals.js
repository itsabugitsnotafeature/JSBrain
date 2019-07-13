/* 
  Algo to check if two objects are equal:
    1. if x === y
      return true
    2. x or y are not instance of Object 
      return false
    3. Constructor of (X !== Y)
      return false
    4. for each Key-K in X
      a. if y does not have key K ==> return false
      b. if x[K] !== y[K] ==> return false
      c. typeof x[K] !== object  ==> return false
      d. RETURN recursive call to Object.equals(( x[ K ],  y[ K ] ) )
    5. 4. for each Key-K in Y
      a. if x does not have key K ==> return false
    6. Return True 
    
*/
Object.equals = function (x, y) {
  if (x === y) return true;
  // if both x and y are null or undefined and exactly the same

  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  // if they are not strictly equal, they both need to be Objects

  if (x.constructor !== y.constructor) return false;
  // they must have the exact same prototype chain, the closest we can do is
  // test there constructor.

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;
    // other properties were tested using x.constructor === y.constructor

    if (!y.hasOwnProperty(p)) return false;
    // allows to compare x[ p ] and y[ p ] when set to undefined

    if (x[p] === y[p]) continue;
    // if they have the same strict value or identity then they are equal

    if (typeof (x[p]) !== "object") return false;
    // Numbers, Strings, Functions, Booleans must be strictly equal

    if (!Object.equals(x[p], y[p])) return false;
    // Objects and Arrays must be tested recursively
  }

  for (p in y) {
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
    // allows x[ p ] to be set to undefined
  }
  return true;
}


let deepEquals = (a, b) => {
  /* 
    1. check if tripple equal

    2. check if both instance of Object 

    3. check if constructor property is the same

    4. for each key in a
        b hasOwnProperty as that kay 
        a[key] tripple equals to b[key]
        typeof a[key] === b
        recursive call both keys

    5. for each key in b
        a hasOwnPeoperty
        tripple equals 
        same typeof
    
    return true.
  */
  
  if(a===b) return true;

  if( !(a instanceof Object) || !(b instanceof Object) ) return false;

  if ( a.constructor === b.constructor ) return false;

  for(key in a){
    if(!b.hasOwnProperty(key)) return false;

    if(a[key] !== b[key]) return false;

    if( typeof a[key] !== typeof b[key] ) return false;

    if( !deepEquals(a[key], b[key]) ) return false;

  }

  for(key in b){
    if(!a.hasOwnProperty(key)) return false;

    if(a[key] !== b[key]) return false;

    if( typeof a[key] !== typeof b[key] ) return false;

    if( !deepEquals(a[key], b[key]) ) return false;

  }

  return true;
}