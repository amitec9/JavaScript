//Count vowels in a string
//Time Complexity: O(n)
// Space Complexity: O(1)
//  Input: "amit"
// Output: 2    
// Explanation: The given string "amit" has 2 vowels 'a' and 'i'.
//  Input: "hello world"
// Output: 3
// Explanation: The given string "hello world" has 3 vowels 'e', 'o', and 'o'.
//  Input: "xyz"
// Output: 0
// Explanation: The given string "xyz" has no vowels.
//  Input: "AEIOU"
// Output: 5
// Explanation: The given string "AEIOU" has 5 vowels 'A', 'E', 'I', 'O', and 'U'.
//Author: Amit Kumar
function vowelString(str){
    let vowel = "aeiouAEIOU"
    let count =0
    for(let i=0;i<str.length;i++){
        if(vowel.includes(str[i])){
            count++
        }
    }
    return count;
}
console.log(vowelString("amit"))