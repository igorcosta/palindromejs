'use strict';
module.exports = {
  isPalindrome: function(phrase) {
   // check if the type is string and not empty
   if(typeof phrase === 'string' && phrase !== ''){
    phrase = phrase.toLowerCase().replace(/\s/g,'');
    return phrase === phrase.split('').reverse().join('');
  }
   return false;
},
check:function(phrase,shouldBePalindrome){
  console.log(this.isPalindrome(phrase) === shouldBePalindrome ? "pass" : "FAIL");
  return this.isPalindrome(phrase) === shouldBePalindrome ? "pass" : "FAIL";
}
};
