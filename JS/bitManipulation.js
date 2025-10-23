/*------------ Binary to Decimal -----------------*/
function binaryToDecimal(n) {
  let dec = 0;
  let p = 1; // power factor
  while (n != 0) {
    // get last digit
    let r = n % 10;
    // add contribution
    dec += r * p;
    // next power of 2
    p *= 2;
    // remove last digit
    n = Math.floor(n / 10);
  }
  return dec;
}

/*------------ Decimal to Binary -----------------*/
function decimalToBinary(n) {
  let bin = 0;
  let p = 1;
  while (n != 0) {
    let r = n % 2;
    bin += r * p;
    p *= 10;
    n = Math.floor(n / 2);
  }
  return bin;
}

console.log(binaryToDecimal(1011));
console.log(decimalToBinary(11));
