// Check if two strings are rotations of each other
// Example: Input: "abcd", "cdab" Output: true
// Time Complexity: O(n)
// Space Complexity: O(n)
//  Author: Amit Kumar

function areRotations(str1,str2){
      if (str1.length !== str2.length) return false;
      return (str1+str2).includes(str2);
}

console.log(areRotations("abcd", "cdab"))