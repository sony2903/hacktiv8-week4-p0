function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
//      struktemp = [{penumpang : '', naikDari : '', tujuan : '', bayar : 0}]
//      struktemp[0].harga = 10
    struk = []
    // console.log(rute.indexOf(rute[3]))   
    if(arrPenumpang.length<1){
        return arrPenumpang
    }

    naikDari = arrPenumpang
    for(i=0; i<arrPenumpang.length; i++){
        struk.push(
            {penumpang : arrPenumpang[i][0], 
            naikDari : arrPenumpang[i][1], 
            tujuan : arrPenumpang[i][2], 
            bayar : 0})
        for(j=0; j<rute.length; j++){
            if(arrPenumpang[i][2] === rute[j]){
                akhir = j
                // console.log(j + 'akhir')
                for(k=0; k<rute.length; k++){
                    if(arrPenumpang[i][1] == rute[k]){
                        // console.log(k + 'awal')
                        awal = k
                    }
                }
                // console.log(rute[j])
                // console.log(rute.indexOf(rute[j]))
                // console.log(arrPenumpang.indexOf(arrPenumpang[i][1]))
                struk[i].bayar =  (akhir - awal)*2000
                // if(struk[i].bayar === 0){
                //     struk[i].bayar = 2000
                // }
            }
        }
    }
    return struk

  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]