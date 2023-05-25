let inputString = "hello";
let consonantCount = 0;
let vowelCount = 0;
const vowels = "aeiou";
for (let i = 0; i < inputString.length; i++) {
    let currentChar = inputString[i];
    if (vowels.indexOf(currentChar) !== -1) {
        vowelCount ++;
    } else {
        consonantCount ++;
    }
}
console.log(
    `${inputString} has ${consonantCount} consonant && ${vowelCount}`
)