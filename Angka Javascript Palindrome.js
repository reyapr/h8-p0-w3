function angkaPalindrome(num) {
    var count = (num+1).toString();
    var reverse = '';
    for(var i=count.length-1;i>=0;i--){
      reverse += count[i]
    }
    var reverseNum = parseInt(reverse)
    if(reverseNum != num+1 ){
     return angkaPalindrome(num+1)   
    }
    else { 
      return reverseNum
    } 
}

//pakai while
function angkaPalindrome(num) {
  while(true){
    num++
    var count = (num).toString();
    var reverse = '';
    for(var i=count.length-1;i>=0;i--){
      reverse += count[i]
    }
    var reverseNum = parseInt(reverse)
    if(reverseNum == num){
      return num
    }
  }
}


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001