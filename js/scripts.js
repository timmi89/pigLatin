// var pigLatin = function(word) {
//   if (word[0] === 'a' || word[0] === 'e' || word['i'] || word === 'o' || word === 'u' ) {
//     return word + 'ay';
//   } else {
//     return word.slice(1) + word[0] + 'ay';
//   }
// };


var pigLatin = function(englishWord) {
  var splitAt = indexOfFirstVowel(englishWord);
  return englishWord.slice(splitAt) + englishWord.slice(0, splitAt)  + 'ay';
};

var indexOfFirstVowel = function(word) {
  var index = -1;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var letters = word.split("");

  for (var i = 0; i < letters.length; i++){
    // var letter= letters[i];
    for (var j=0; j < vowels.length; j++) {
      // var vowel = vowels[i];
      if (letters[i] === vowels[j]) {
        return i;
      }
    }
  }
};
