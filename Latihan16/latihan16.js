function graduates (students) {
     // Code disini
    //  template = {
    //      name : '',
    //      score : 0
    //  }

     foxes = []
     foxeslulus = []
     wolves = []
     wolveslulus = []
     tigers = []
     tigerslulus = []
     lulus = {}

     for(i=0; i<students.length; i++){
        if(students[i].class === 'foxes'){
            foxes.push({
                name : students[i].name,
                score : students[i].score
            })
        }
        if(students[i].class === 'wolves'){
            wolves.push({
                name : students[i].name,
                score : students[i].score
            })
        }
        if(students[i].class === 'tigers'){
            tigers.push({
                name : students[i].name,
                score : students[i].score
            })
        }
     }

    //  console.log(foxes)
    //  console.log(wolves)
    //  console.log(tigers)

     //foxes
     for(f=0; f<foxes.length; f++){
        if(foxes[f].score >= 75){
            foxeslulus.push(foxes[f])
            // console.log('yes')
        }
     }
     //wolves
     for(w=0; w<wolves.length; w++){
        if(wolves[w].score >= 75){
            wolveslulus.push(wolves[w])
            // console.log('yes')
        }
     }
     //tigers
     for(t=0; t<tigers.length; t++){
        if(tigers[t].score >= 75){
            tigerslulus.push(tigers[t])
            // console.log('yes')
        }
     }
     
     if(foxeslulus.length>0){
         lulus.foxes = foxeslulus
     }
     if(wolveslulus.length>0){
         lulus.wolves = wolveslulus
     }
     if(tigerslulus.length>0){
         lulus.tigers = tigerslulus
     }
    //  console.log(foxeslulus)
    //  console.log(wolveslulus)
    //  console.log(tigerslulus)
     return lulus
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


// console.log(graduates([])); //{}