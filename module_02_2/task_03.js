function findLongestWord(string = "") {
    // Write code under this line
    const words = string.split(" ");
    let longestdWord = words[0];
    let length = words.length;
    for (let i = 0; i < length; i += 1) {
        if (longestdWord.length < words[i].length) {
            longestdWord = words[i];
        }
    }
    return longestdWord;
    //    console.log(words);
    //   console.log(string.split(" "));
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'