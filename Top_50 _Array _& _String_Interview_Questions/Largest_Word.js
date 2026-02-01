//  Find Largest Word
let largestWord=(str)=>{
    let words= str.split(" ")
    let maxWord =""
    for(let word of words){
        if(word.length >maxWord.length){
            maxWord = word
        }
    }
    return maxWord
}
console.log(largestWord("I love JavaScript programming"))