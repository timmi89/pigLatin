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



// describe('leapYear', function() {
//   it("is false for a year that is not divisible by 4, 100, or 400", function() {
//     expect(leapYear(1993)).to.equal(false);
//   });
// });
