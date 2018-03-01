function balikString(str){
  var reverseStr = ''
	for(i=str.length-1;i>=0;i--){
		reverseStr += str[i]
	}
  return reverseStr;
}
balikString('Hello World!')
