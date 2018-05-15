// BDD Behavior Driven Development
const assert = require('assert');
const { expect } = require('chai');

const sum = (a, b) => a + b;

describe('helloworld du test', () => {

  describe('sum function', () => {

    it('should work', () => {
      assert.strictEqual(sum(1, 2), 3);
      expect(sum(1, 2)).to.be.equals(3);
      assert.strictEqual(sum(1, -1), 0);
      assert.strictEqual(sum(0, Infinity), Infinity);
    });

  });

  describe('settimeout function', () => {

    it('should work', (done) => {
      setTimeout(() => {
        expect(true).to.be.true;
        done();
      }, 100);
    });

  });

});



