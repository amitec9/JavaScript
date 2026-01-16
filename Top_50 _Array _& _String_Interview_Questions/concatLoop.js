function concatLoop(str1, str2) {
    let result = "";

    for (let ch of str1) result += ch;
    for (let ch of str2) result += ch;

    return result;
}

console.log(concatLoop("Hello", "World"));
// Output: "HelloWorld"
