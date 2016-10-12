
const luhnCC = {};

luhnCC.isValid = function(cardNumber) {
  if (/[^0-9-\s]+/.test(cardNumber)) { return false; }

  let nCheck = 0;
  let nDigit = 0;
  let bEven = false;

  cardNumber = cardNumber.replace(/\D/g, '');

  for (let n = cardNumber.length - 1; n >= 0; n--) {
    const cDigit = cardNumber.charAt(n);
    nDigit = parseInt(cDigit, 10);

    nDigit = bEven ? nDigit * 2 : nDigit;
    if (bEven && nDigit > 9) { nDigit -= 9; }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
};

export default luhnCC;
