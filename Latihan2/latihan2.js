function fpb(angka1, angka2) {
    // you can only write your code here!
    // angka1 = 12
    // angka2 = 16
    fpb1 = []
    fpb2 = []
    if(angka1 != 0 && angka2 != 0){
      for(i=1; i<=angka1; i++){
        if(angka1 % i === 0){
          fpb1.push(i)
        }
      }
      for(j=1; j<=angka2; j++){
        if(angka2 % j === 0){
          fpb2.push(j)
        }
      }
    }
  // console.log(fpb1)
  // console.log(fpb2)
  for(k=fpb1.length-1; k>=0; k--){
    for(h=fpb2.length-1; h>=0; h--){
      if(fpb1[k] === fpb2[h]){
        return fpb1[k]
        
      }
    }
  }
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1