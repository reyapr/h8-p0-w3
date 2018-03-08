function tentukanDeretAritmatika(arr) {
	var result = parseInt(arr[arr.length-1]);
	var selisih = arr[2]-arr[1];
  	for(var i=arr.length-1;i>0;i--){
  		result -= selisih
			if(result == arr[i-1]){
				return true
		  }
		  else{
		  	return false
		  }
 	 }
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
