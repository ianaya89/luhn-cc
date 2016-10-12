class CardNumberFixture {
  constructor(valid, invalid) {
    this.valid = valid;
    this.invalid = invalid || valid.substring(0, valid.length - 1);
  }
}

const cardNumbers = {
  amex: new CardNumberFixture('378282246310005'),
  amexCorporate: new CardNumberFixture('378734493671000'),
  australianBankCard: new CardNumberFixture('5610591081018250'),
  dinersClub: new CardNumberFixture('30569309025904')
};


export default cardNumbers;
