describe('pigLatin', function() {
  it("words that begin with a vowel to return 'ay' at the end of it.", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });
  it("takes a single consonant from the beginning of a word and moves it to the end of it and adds 'ay' to the end of it.", function() {
    expect(pigLatin("dog")).to.equal("ogday");
  });

  it("takes two consonants from the beginning of a word and moves it to the end of it, and adds 'ay' to the end of it.", function() {
    expect(pigLatin("theater")).to.equal("eaterthay");
  });
});

describe("indexOfFirstVowel", function(){
  it("returns 0 for a word that starts with a vowel", function(){
    expect(indexOfFirstVowel("apple")).to.equal(0);
  });

  it("it returns 1 for a word that starts with a single consonant", function (){
    expect(indexOfFirstVowel("bob")).to.equal(1);
    });
});
