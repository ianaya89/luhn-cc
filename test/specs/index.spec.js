/* global describe it */

import cardNumbers from '../fixture/card-numbers';
import assert from 'assert';
import luhnCC from '../../src';

describe('luhnCC', () => {

  describe('isValid()', () => {
    it('should pass validation with a valid AMEX card number', () => {
      console.log(luhnCC.isValid(cardNumbers.amex.valid));
    });
  });

});
