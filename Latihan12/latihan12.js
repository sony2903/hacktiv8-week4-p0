function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    // console.log(listBarang[0][2])
    temp = []
    // temp.push(detailTemp)
    // temp.push(detailTemp)
    // console.log(listBarang.length)
    if(shoppers.length === 0){
        return shoppers
    }
    
    for(i=0; i<listBarang.length; i++){
        temp.push({
            product : listBarang[i][0],
            shoppers : [],
            leftOver : listBarang[i][2],
            totalProfit : 0
        })
    }
        
        // namabrand  
        for(j=0; j<temp.length; j++){
            for(k=0; k<shoppers.length; k++){
                if(shoppers[k].product === temp[j].product){
                if(shoppers[k].amount <= temp[j].leftOver){
                    temp[j].shoppers.push(shoppers[k].name)
                    temp[j].leftOver -= shoppers[k].amount
                    temp[j].totalProfit += listBarang[j][1]*shoppers[k].amount
                    }
                    }
                }
            }
        
        return temp
    // console.log(shoppers.length)
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//   //[ { product: 'Sepatu Stacattu',
//   //   shoppers: [ 'Windi', 'Vanessa' ],
//   //   leftOver: 5,
//   //   totalProfit: 7500000 },
//   // { product: 'Baju Zoro',
//   //   shoppers: [],
//   //   leftOver: 2,
//   //   totalProfit: 0 },
//   // { product: 'Sweater Uniklooh',
//   //   shoppers: [],
//   //   leftOver: 1,
//   //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
//   // [ { product: 'Sepatu Stacattu',
//   //     shoppers: [ 'Windi' ],
//   //     leftOver: 2,
//   //     totalProfit: 12000000 },
//   //   { product: 'Baju Zoro',
//   //     shoppers: [ 'Devi', 'Lisa' ],
//   //     leftOver: 0,
//   //     totalProfit: 1000000 },
//   //   { product: 'Sweater Uniklooh',
//   //     shoppers: [ 'Rani' ],
//   //     leftOver: 0,
//   //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
//   // [ { product: 'Sepatu Stacattu',
//   //     shoppers: [],
//   //     leftOver: 10,
//   //     totalProfit: 0 },
//   //   { product: 'Baju Zoro',
//   //     shoppers: [],
//   //     leftOver: 2,
//   //     totalProfit: 0 },
//   //   { product: 'Sweater Uniklooh',
//   //     shoppers: [],
//   //     leftOver: 1,
//   //     totalProfit: 0 } ]
  console.log(countProfit([])); //[] 