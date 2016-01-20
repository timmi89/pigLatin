var pigLatin = function(word) {
  if (word[0] === 'a' || word[0] === 'e' || word['i'] || word === 'o' || word === 'u' ) {
    return word + 'ay';
  } else {
    return word.slice(1) + word[0] + 'ay';
  }
};
