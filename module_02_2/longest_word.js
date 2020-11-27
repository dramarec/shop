const favorite = "the road will be mastered be the walking";

//console.log(favorite.length);
const findLongestWord = function (string) {
    const words = string.split(' ');
    let longestWord = words[0]

    let length = words.length;
    for (let i = 0; i < length; i += 1) {
        // console.log(words[i]);
        if (longestWord.length < words[i].length) {
            longestWord = words[i]
        }
    }
    return longestWord;

    //console.log(longestWord);
    //  return;
}
console.log(findLongestWord(favorite));