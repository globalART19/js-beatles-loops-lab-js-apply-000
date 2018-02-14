function theBeatlesPlay(musicians, instruments){
  var playsArray = [];
  for (var i = 0; i < musicians.length; i++){
    playsArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
return playsArray
}

function johnLennonFacts(facts){
  var newFactsArray = [];
  var i = 0;
  while (facts[i]){
    newFactsArray.push(facts[i] + '!!!');
    i++
  }
  return newFactsArray
}

// function iLoveTheBeatles(n){
//   var soMuchLove = [];
//   var i = 0;
//   do {
//     soMuchLove.push('I love the Beatles!');
//     i++
//   }
//   while (i < 15 || i < n);
//   return soMuchLove
// }
