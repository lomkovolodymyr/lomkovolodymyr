const money = prompt('Enter the number of the money and open console (F12 button)');
let tip = money >= 50 && money <= 300 ? `${money * .15  }` : `${money * .20}`;
console.log(tip);

console.log(`Tips is ${tip}, value is ${money} , and the finale value is ${money*1 + tip*1} `); 