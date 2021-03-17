function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP"
      },
      gold: true
    },
    002: {
      artist: "Celine Dion",
      title: "A New Day Has Come",
      release_year: 2002,
      id: 1,
      formats: {
        1: "SACD",
        2: "MD",
        3: "cassette"
      }
    }
  };
  return myMusic;
}

myFunction()[2];
console.log(myFunction()[2]);
module.exports = myFunction;
