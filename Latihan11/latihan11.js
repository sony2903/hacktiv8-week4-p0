function shoppingTime(memberId, money) {
    // you can only write your code here!
    items = [
        {
            nama : 'Sepatu brand Stacattu',
            harga : 1500000
        },
        {
            nama : 'Baju brand Zoro',
            harga : 500000
        },
        {
            nama : 'Baju brand H&N',
            harga : 250000
        },
        {
            nama : 'Sweater brand Uniklooh',
            harga : 175000
        },
        {
            nama : 'Casing Handphone',
            harga : 50000
        }
    ]

    //cek untuk "mohon maaf"
    if(memberId == undefined || money == undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if(memberId.length === 0){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if(money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }
    
listPurchased = [[]]

    console.log(`MemberId : ${memberId}`)
    console.log(`Money : ${money}`)
    for(i=0; i<items.length; i++){
        if(money >= items[i].harga){
            listPurchased[0].push(' '+ items[i].nama)
            // console.log(i)
            money -= items[i].harga
            // console.log(money)
        }
        // if(i == items.length-1 && money >= 50000){
        //     i = 0
        // }
        
    }
    console.log(`listPurchased :${listPurchased}`)
    console.log(`changeMoney : ${money}`)
    return ''
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja