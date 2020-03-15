function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    // kalimat = 'haI'
    kamus1 = 'abcdefghijklmnopqrstuvwxyz '
    kamus2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '
    angka = '0123456789'
    temp = ''
    // garing = '-'
    for( i = 0; i < kalimat.length; i++){
        for( j = 0; j < kamus1.length; j++){
            // console.log(kalimat[i])
            if(kalimat[i] == kamus1[j]){
                temp += kamus2[j]
            } else if(kalimat[i] == kamus2[j]){
                temp += kamus1[j]
            } else if(kalimat[i] === angka[j]){
                temp += angka[j]
            } else if(kalimat[i] === ' '){
                temp += ' '
                break
            } else if(kalimat[i] === '-'){
                temp += '-'
                break
            } else {
                temp += kalimat[i]
                break
            } 
            // else if(kalimat[i] === '@'){
            //     temp += '@'
            //     break
            // } else if(kalimat[i] === '#'){
            //     temp += '#'
            //     break
            // } else if(kalimat[i] === '$'){
            //     temp += '$'
            //     break
            // } else if(kalimat[i] === '%'){
            //     temp += '-'
            //     break
            // } else if(kalimat[i] === '-'){
            //     temp += '-'
            //     break
            // }
        }
    }
    // console.log(temp)
    return temp
}
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

