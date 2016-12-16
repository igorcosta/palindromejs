var chai = require('chai');
var expect = chai.expect;
var Palindrome = require('../index.js');
describe('Palindrome',function (){

  it('check', function (){
    expect(Palindrome.check()).to.not.equal(undefined);
    expect(Palindrome.check('stats')).to.not.equal('');
  });
  it('isPalindrome default false',function (done){
      expect(Palindrome.isPalindrome()).to.equal(false);
      expect(Palindrome.isPalindrome()).to.not.equal(undefined);
      done();
  });
  it('isPalindrome single words needs to be true',function (done){

      expect(Palindrome.isPalindrome('abcba')).to.equal(true);
      expect(Palindrome.isPalindrome('stats')).to.equal(true);
      expect(Palindrome.isPalindrome('alula')).to.equal(true);
      expect(Palindrome.isPalindrome('kayak')).to.equal(true);
      done();
  });
  it('isPalindrome phrase needs to be true', function (done){
    expect(Palindrome.isPalindrome('Mr owl ate my metal worm')).to.equal(true);
    expect(Palindrome.isPalindrome('Madam Adam')).to.equal(true);
    expect(Palindrome.isPalindrome('Never Odd Or Even')).to.equal(true);
    done();
  });
  it('isPalindrome phrase needs to be false', function (done){
    expect(Palindrome.isPalindrome('Never Even Or Odd')).to.equal(false);
    done();
  });
});
