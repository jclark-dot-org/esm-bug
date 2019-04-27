import { expect } from 'chai'
import EsmBug from '../index.js'

describe('EsmBug', function() {
  it('should work with esm', function() {
    let bug = new EsmBug();
    expect(bug.testMe()).to.be.equal(42);
  })
});
