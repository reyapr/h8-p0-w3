function pasanganTerbesar(num) {
  var number = num.toString()
  var sortNum = number.split('').sort(function(a,b){
   	return b-a
  })
  var result = ''
  for(var i=0;i<number.length;i++){
   if(sortNum[0]==number[i]){
    result += sortNum[0] + number[i+1]
   }
  }
  return parseInt(result[0]+result[1])
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99