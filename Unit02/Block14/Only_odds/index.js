let inputArray = [2, 4, 6, 8, 11, 20, 15, 22];
let result = [];
for (let i = 0; i < inputArray.length; i++) {
    const currentElement = inputArray[i];
    const isOdd = currentElement % 2 !==0;
    if (isOdd) {
        result.push(currentElement)
    }
}
console.log(result)