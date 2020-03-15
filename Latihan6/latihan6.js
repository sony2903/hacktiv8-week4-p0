function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    // angka = 90

    if(angka === 0){
        console.log(0)
        return 0
    } else{ 
            if(angka<=10){
                // console.log(2)
                return 2
            } else {
                for(i=2; i<=angka; i++){
                    for(j=1; j<=angka; j++){
                        if(i*j == angka && i+j<=18){
                            return 2
                        } else if(i*j == angka && i+j<=108){
                            return 3
                        } else if(i*j == angka && i+j<=198){
                            return 4
                        // } console.log('tes')
                    }
                }
            }
        }
    }
}

    
// console.log(fpb1)
    

  
  
  // TEST CASES
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2