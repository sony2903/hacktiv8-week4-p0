function changeMe(arr) {
    // you can only write your code here!
    // console.log(arr.length)
    urutan = 1
    tahun = 2020
    // console.log(arr.length)
    if(arr.length == 0 ){
        return ''
    }
    for(i=0; i<arr.length; i++){
        console.log(`${urutan}. ${arr[i][0]} ${arr[i][0]}`)
        console.log(`firstname : ${arr[i][0]}`)
        console.log(`lastname : ${arr[i][1]}`)
        console.log(`gender : ${arr[i][2]}`)
        if(arr[i][3] === undefined || tahun < arr[i][3]){
            console.log(`age : Invalid Birth Year`)
        }
        else{
            console.log(`age : ${tahun - arr[i][3] - 1}`)
        }     
        urutan++
        console.log()
    }
    return ''
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""