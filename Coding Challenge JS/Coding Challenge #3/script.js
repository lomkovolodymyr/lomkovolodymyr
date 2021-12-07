//TEST DATA:
let dolphin=(96+108+89)/3;
let koala=(88+91+110)/3;

console.log('1.Average score for each team:');
console.log('Dolphin: '+dolphin);
console.log('Koala: '+koala);
console.log('Result:');
if(dolphin > koala){
  console.log('The winner is dolphin');
}else if(dolphin < koala){
  console.log('The winner is koala');
}else{('this is a draw')}

//TEST DATA BONUS 1:
dolphin=(97+112+101)/3;
koala=(109+95+123)/3

console.log('2.Average score for each team:');
console.log('Dolphin: '+dolphin);
console.log('Koala: '+koala);

//Requirement for a minimum score of 100 is include >=100
console.log('Result:');
if((dolphin > koala) && (dolphin >= 100)){
  console.log('The winner is dolphin');
}else if((dolphin < koala) && (koala >= 100)){
  console.log('The winner is koala');
}else if((dolphin == koala) && (dolphin >= 100)){
  console.log('draw');
}else{
   console.log('nobody wins');
}

//TEST DATA BONUS 2:
console.log('3.Average score for each team:');
dolphin=(97+112+101)/3;
koala=(109+95+106)/3

console.log('Dolphin: '+dolphin);
console.log('Koala: '+koala);
console.log('Result:');
if((dolphin > koala) && (dolphin >= 100)){
  console.log('The winner is dolphin');
}else if((dolphin < koala) && (koala >= 100)){
  console.log('The winner is koala');
}else if((dolphin == koala) && (dolphin >= 100)){
  console.log('draw');
}else{
   console.log('draw');
}