//Numeral system
/* const myBin = 0b1010;

const myOct = 0o24;

const myDec = 30;

const myHex = 0x28;

console.log(myBin, myOct, myDec, myHex); */

//Century from year
function getCentury(year) {
  if (year === 0) {
    return year + 1;
  }

  if (year % 100 === 0) {
    return year / 100;
  } else {
    return Math.floor(year / 100 + 1); 
  }
}

console.log(getCentury(0));