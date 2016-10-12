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

  describe('isValid(cardNumber) => Diners Club', () => {
    it('should pass validation with a valid Diners Club card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.dinersClub.valid), true);
    });

    it('should fail with a valid Diners Club card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.dinersClub.invalid), false);
    });
  });

  describe('isValid(cardNumber) => Discover', () => {
    it('should pass validation with a valid Discover card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.discover.valid), true);
    });

    it('should fail with a valid Discover card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.discover.invalid), false);
    });
  });

  describe('isValid(cardNumber) => JCB', () => {
    it('should pass validation with a valid JCB card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.jcb.valid), true);
    });

    it('should fail with a valid JCB card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.jcb.invalid), false);
    });
  });

  describe('isValid(cardNumber) => Master Card', () => {
    it('should pass validation with a valid Master Card card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.masterCard.valid), true);
    });

    it('should fail with a valid Master Card card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.masterCard.invalid), false);
    });
  });

});
