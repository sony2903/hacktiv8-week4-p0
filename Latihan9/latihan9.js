function checkAB(num) {
    // you can only write your code here!
    // var num = 'lane borrowed'
    // console.log(num.length)
    for(i = 0; i < num.length; i++){
        if(num[i] === 'a' && num[i+4] === 'b'){
            return true
        }else if(num[i] === 'b' && num[i+4] === 'a'){
            return true
        }
    }
    return false
  }

// console.log(num[1])
// console.log(num[5])
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false