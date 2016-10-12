/* global describe it */

import assert from 'assert';
import cardNumbers from '../fixture/card-numbers';
import luhnCC from '../../src';

describe('luhnCC', () => {

  describe('isValid(cardNumber) => AMEX', () => {
    it('should pass validation with a valid AMEX card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.amex.valid), true);
    });

    it('should fail with a valid AMEX card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.amex.invalid), false);
    });
  });

  describe('isValid(cardNumber) => AMEX Corporate', () => {
    it('should pass validation with a valid AMEX card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.amexCorporate.valid), true);
    });

    it('should fail with a valid AMEX card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.amexCorporate.invalid), false);
    });
  });

  describe('isValid(cardNumber) => AMEX Corporate', () => {
    it('should pass validation with a valid AMEX Corporate card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.amexCorporate.valid), true);
    });

    it('should fail with a valid AMEX Corporate card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.amexCorporate.invalid), false);
    });
  });

  describe('isValid(cardNumber) => Australian BankCard', () => {
    it('should pass validation with a valid Australian BankCard card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.australianBankCard.valid), true);
    });

    it('should fail with a valid Australian BankCard card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.australianBankCard.invalid), false);
    });
  });

});
