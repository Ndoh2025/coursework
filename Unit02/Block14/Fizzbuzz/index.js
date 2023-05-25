for (let i = 1; i <= 100; i++) {
    let currentNumber = i;
    if (currentNumber % 3 && currentNumber % 5===0) {
        console.log("fizzbuzz");
    } else if (currentNumber % 3===0) {
        console.log("fizz");
    } else if (currentNumber % 5===0){
        console.log ("buzz");
    } else {
        console.log(i);
    }
}