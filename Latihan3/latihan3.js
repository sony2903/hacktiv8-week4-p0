function cariMedian(arr) {
    // you can only write your code here!
    // arr = [1, 2, 3, 4, 5]
    // console.log(arr[(arr.length/2)-1])
    // console.log(arr[(arr.length/2)])    
    if(arr.length % 2 === 0){
        a = arr[(arr.length/2)-1]
        b = arr[(arr.length/2)]
        hasil = (a+b)/2
        return hasil
    }else if(arr.length != 0){
        return arr[(arr.length/2)-0.5]
    } else {
        return 0
    }

  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5