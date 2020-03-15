function ubahHuruf(kata) {
    // you can only write your code here!
    // kata = 'wow'
    kamus = 'abcdefghijklmnopqrstuvwxyz'
    temp = ''
    for(i=0; i<kata.length; i++){
        for(j=0; j<kamus.length; j++){
            if(kata[i] === 'z'){
                temp += 'a'
            } else if(kata[i] === kamus[j]){
                temp += kamus[j+1]
            }
        }
    }
    // kata += 'z'
    // console.log(temp)
    return temp
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu