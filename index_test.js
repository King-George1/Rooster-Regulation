const assert = require('assert');
const Rooster = require('../index');

describe('string', () => {
  describe('return its argument as moo!', () => {
    it('string', () => {
      const expected = 'cock-a-doodle-doo!';
      const actual = Rooster.announceDawn();
      assert.ok(expected === actual)
    });
  });

  describe('returns its argument as a string', () => {
    
    it('returns its argument as a string', () => {
      const expected = 'string';
      const actual = typeof(Rooster.timeAtDawn(4));
      assert.ok(expected === actual)
    });


  });

    describe(' test that .timeAtDawn throws an error if its argument is not a valid hour', () => {
    
    it('returns its argument as a string', () => {
      assert.throws(
  () => {
     Rooster.timeAtDawn(-4);
  },
  RangeError
)
    });

     it('throws an error if passed a number greater than 23', () => {
      assert.throws(
  () => {
     Rooster.timeAtDawn(45);
  },
  RangeError
)
    });

    it('returns its argument as a string', () => {
      assert.throws(
  () => {
     Rooster.timeAtDawn(23);
  },
  RangeError
)
    });

    it('returns its argument as a string', () => {
      assert.throws(
  () => {
     Rooster.timeAtDawn(0);
  },
  RangeError
)
    });


  });



})
