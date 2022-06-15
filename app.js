//Numeral system
/* const myBin = 0b1010;

const myOct = 0o24;

const myDec = 30;

const myHex = 0x28;

console.log(myBin, myOct, myDec, myHex); */

//Century from year
/* function getCentury(year) {
  if (year === 0) {
    return year + 1;
  }

  if (year % 100 === 0) {
    return year / 100;
  } else {
    return Math.floor(year / 100 + 1); 
  }
}

console.log(getCentury(0)); */

//Convert currency
/* function convertCurrency (amount, exchangeRate, currencyName) {

  if (amount <=0 || exchangeRate <= 0) {
    return 'Enter valid data';
  }  

  let x = amount * exchangeRate;
  if (Number.isInteger(x) !== true) {
    x = x.toFixed(2);
  }
  
  return `Give them ${x} ${currencyName}('s)`;

}
console.log(convertCurrency(1000, 0.037, 'dollar')) */

//Get ractangle area
/* function getReactangleArea(side, diagonal) {

  if (side >= diagonal || side <= 0) {
    return 'not rectangle';
  }

  const x = side * Math.sqrt(diagonal ** 2 - side ** 2);
  return +x.toFixed(2);
  
}

console.log(getReactangleArea(10, 20));

console.log(2) */

/* let getString = () => {
  const greetings = 'Hello...'
  return greetings;
} */

//Is even
/* function isEven(number) {

  if (number % 2 === 0){
    return true;
  } else {return false}

}

console.log(isEven(16)); */

//Make decision
function makeDecision(fuelRemaining, distance, fuelConsuption) {

}