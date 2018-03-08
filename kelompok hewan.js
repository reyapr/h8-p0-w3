function groupAnimals(animals) {
  animals.sort();
  var result = [];
  var kelompok = [];
  var abjad = animals[0][0]
  for(var i=0;i<animals.length;i++){
    if(animals[i][0]==abjad){
      kelompok.push(animals[i])
    }
    else {
     result.push(kelompok);
     kelompok = [];
     abjad = animals[i][0];
     kelompok.push(animals[i]); 
    }
  }
  result.push(kelompok);
  return result  
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]