let value = "Ndoh";
if (value) {
    console.log(true);
}else if (value===false) {
    console.log("The boolean value false is falsy");
} else if (value===null) {
    console.log("The null value is falsy");
}else if (value===undefined) {
    console.log("undefined is falsy");
}else if (value===0) {
    console.log("the number 0 is falsy (the only falsy number)");
}else if (value==="") {
    console.log("The empty string is falsy (the only falsy string)");
}