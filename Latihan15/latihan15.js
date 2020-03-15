function highestScore (students) {
    // Code disini
    foxes = []
    wolves = []
    tigers = []
    terbaik = {}
    temp = 0

    if(students <= 0){
      return students
    }

    for(i=0; i<students.length; i++){
        if(students[i].class == 'foxes'){
            foxes.push(students[i].score)
        }
        if(students[i].class == 'wolves'){
            wolves.push(students[i].score)
        }
        if(students[i].class == 'tigers'){
            tigers.push(students[i].score)
        }
    }

    //foxes
    for (i = 0; i < foxes.length-1; i++) {
      for (j = 0; j < foxes.length-1; j++) 
      if (foxes[j] < foxes[j+1]) 
      { 
        // swap foxes[j+1] and foxes[i] 
        temp = foxes[j]; 
        foxes[j] = foxes[j+1]; 
        foxes[j+1] = temp; 
      }
    }

    //wolves
    for (i = 0; i < wolves.length-1; i++) {
      for (j = 0; j < wolves.length-1; j++) 
      if (wolves[j] < wolves[j+1]) 
      { 
        // swap wolves[j+1] and wolves[i] 
        temp = wolves[j]; 
        wolves[j] = wolves[j+1]; 
        wolves[j+1] = temp; 
      }
    }
    //tigers
    for (i = 0; i < tigers.length-1; i++) {
      for (j = 0; j < tigers.length-1; j++) 
      if (tigers[j] < tigers[j+1]) 
      { 
        // swap tigers[j+1] and tigers[i] 
        temp = tigers[j]; 
        tigers[j] = tigers[j+1]; 
        tigers[j+1] = temp; 
      }
    }
    
    // console.log(foxes)
    // console.log(wolves)
    
    //terbaik foxes
    terbaikfoxes = {name: '', score: 0}
    for(i=0; i<students.length; i++){
      if(students[i].score === foxes[0]){
        terbaikfoxes.name = students[i].name
        terbaikfoxes.score = students[i].score
      }
    }
    
    //terbaik wolves
    terbaikwolves = {name: '', score: 0}
    for(i=0; i<students.length; i++){
      if(students[i].score === wolves[0]){
        terbaikwolves.name = students[i].name
        terbaikwolves.score = students[i].score
      }
    }
    
    //terbaik tigers
    terbaiktigers = {name: '', score: 0}
    for(i=0; i<students.length; i++){
      if(students[i].score === tigers[0]){
        terbaiktigers.name = students[i].name
        terbaiktigers.score = students[i].score
      }
    }

    if(terbaikfoxes.name != ''){
      // console.log(terbaikfoxes)
      terbaik.foxes = terbaikfoxes
    }
    if(terbaikwolves.name != ''){
      // console.log(terbaikwolves)
      terbaik.wolves = terbaikwolves 
    }
    if(terbaiktigers.name != ''){
      // console.log(terbaiktigers)
      terbaik.tigers = terbaiktigers 
    }
    return terbaik
  }
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
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
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}