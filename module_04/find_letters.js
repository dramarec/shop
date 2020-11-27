// find letters glassnie 

const string = 'lorem spam find you uu';

const searchLiteral = function (string, literal) {
    // const LITERAL = 'oeaiu';
    let total = 0;
    const wordsArr = string.split(' ');
    const symbolsArr = literal.split('');
    //console.log(symbolsArr);

    for (const word of wordsArr) {
        let letters = word.split('');
        for (const letter of letters) {
            let symbol = literal.includes(letter);

            if (symbol) {
                total += 1;
            }
        }
    }
    return total;
};

// console.log(searchLiteral(string));

//вывести алфавит, вычленить глассные и
//написать колличество 

const searchVowels = function (string) {
    let indexSymbol = 'a'.charCodeAt();
    let alphabet = ''
    let vowels = ''
    // const LITERAL = 'oeaiu';
    //97 101 105 111 117 
    // console.log(alphabet);
    for (let i = 0; i < 26; i += 1) {
        alphabet += String.fromCharCode(indexSymbol);
        indexSymbol += 1;

    }
    for (let j = 0; j < alphabet.length; j += 1) {
        // console.table(alphabet[j], alphabet[j].charCodeAt());
        if (alphabet[j].charCodeAt() === 97
            || alphabet[j].charCodeAt() === 101
            || alphabet[j].charCodeAt() === 105
            || alphabet[j].charCodeAt() === 111
            || alphabet[j].charCodeAt() === 117) {
            vowels += String.fromCharCode(alphabet[j].charCodeAt())

        }
    }
    //console.log(vowels);
    return searchLiteral(string, vowels);

    //return alphabet

}
console.log(searchVowels(string)); 