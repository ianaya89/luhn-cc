/* eslint-disable max-len */
const cardNumbersRegex = {
  AMEX       : /^3[47][0-9]{13}$/,
  DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  DISCOVER   : /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
  JCB        : /^(?:2131|1800|35\d{3})\d{11}$/,
  VISA       : /^4[0-9]{12}(?:[0-9]{3})?$/,
  MASTER_CARD: /^5[1-5][0-9]{14}$/
};
/* eslint-enable max-len */


export default cardNumbersRegex;
