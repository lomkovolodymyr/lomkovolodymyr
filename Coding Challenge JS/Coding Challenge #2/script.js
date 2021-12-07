//BMI Mark & John: height and mass.
const markMass = 78; const markHeight = 1.69; const johnMass = 92; const johnHeight = 1.95; var markBMI; var johnBMI;

alert ('Hello. If you want to know BMI Mark and John and find out who is bigger press "OK" and open console (F12 button)');

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

var markBiggerBMI   = markBMI > johnBMI;

console.log(markBMI, johnBMI);

if(markBMI > johnBMI){
  console.log('Mark\'s BMI is bigger than John\'s');
}
else {
  console.log('John\'s BMI is bigger than Mark\'s');
}