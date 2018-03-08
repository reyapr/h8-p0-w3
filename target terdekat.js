function targetTerdekat(arr) {
  var x = arr.indexOf('x');
  var lastX = arr.lastIndexOf('x');
  var o = arr.indexOf('o');
  if(x==-1){
    return 0
  }
  else if(o<x){
    return x-o
  }
  else{
    return o-lastX
  }


}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2