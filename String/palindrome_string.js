// Check whether a string is palindrome or not
//  A palindrome is a word, phrase, number, or other sequences of characters which reads the same backward as forward, such as madam or racecar.
// Example: Input: "madam" Output: Palindrome
//        Input: "hello" Output: Not Palindrome
// Approach: Reverse the string and compare it with the original string.
// If both are same, then the string is a palindrome.
//  Time Complexity: O(n) where n is the length of the string.
// Space Complexity: O(1)
// JavaScript Code: 
// Author :Amit Kumar
function isPalindrome(str){
    let rev=""
    for(let i= str.length-1;i>=0;i--){
        rev+=str[i]
    }
    if(rev === str){
         console.log("Palindrome ")
    }else{
        console.log("not Palindrome ")
    }
    
}
isPalindrome("abc")