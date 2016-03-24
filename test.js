var buttt = require('./main');
var assert = require('assert');

describe('buttt', function() {
  it('is a single butts with no args', function() {
    assert.equal('butts', buttt());
  });

  it('is as many butts as the arg passed in', function() {
    assert.equal('butts butts', buttt(2));
  });

  it('does nothing for a negative number. THIS IS NOT A BUG IT IS A FEATURE K', function() {
    assert.equal('', buttt(-1));
  });
});
