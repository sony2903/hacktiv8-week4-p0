function cariModus(arr) {
    // you can only write your code here!
    // arr = [10, 4, 5, 2, 4, ]
    modus = []
    temp = 0
    terbanyak1 = 0
    banding = 0
    terbanyak2 = 0
    //sort
    for(s=0; s<arr.length-1; s++){
        for(s1=0; s1<arr.length-s-1; s1++){
            if (arr[s1] > arr[s1+1]) 
                {
                    // swap arr[s1+1] and arr[i] 
                    temp = arr[s1]; 
                    arr[s1] = arr[s1+1]; 
                    arr[s1+1] = temp; 
                } 
        }
    }
    // console.log(arr)
    for(i=0; i<arr.length-1; i++){
        // modus[i].push(arr[i])
        if(arr[i] === arr[i+1]){
            modus.push(arr[i+1])
        }
    }
    // console.log(modus.length + 'modus')
    // console.log(arr.length + 'arr')
    // jumlahangka = arr.length - 1
    // console.log(jumlahangka + 'jumlah')
    if(modus.length == arr.length-1){
        return -1
    } else if(modus.length>0){
        return modus[0]
    } else {
        return -1
    }

  }
  
//   TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1