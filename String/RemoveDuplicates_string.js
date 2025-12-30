// Remove duplicate characters from a string
// Example: Input: "aaaaamitt" Output: "amit"
// Time Complexity: O(n^2)
// Space Complexity: O(n)
// author: Amit Kumar

function RemoveDuplicates(str){
    let result =""
    for(let i=0;i<str.length;i++){
        if(!result.includes(str[i])){
           result += str[i] 
        }
        
    }
    return result;
}
console.log(RemoveDuplicates("aaaaamitt"))