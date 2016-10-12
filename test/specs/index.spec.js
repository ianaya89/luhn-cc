/* global describe it */

import assert from 'assert';
import cardNumbers from '../fixture/card-numbers';
import luhnCC from '../../src';

describe('luhnCC', () => {

  describe('isValid() => AMEX', () => {
    it('should pass validation with a valid AMEX card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.amex.valid), true);
    });

    it('should fail with a valid AMEX card number', () => {
      assert.equal(luhnCC.isValid(cardNumbers.amex.invalid), false);
    });
  });

});
