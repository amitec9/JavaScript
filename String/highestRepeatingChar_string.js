// Find the highest repeating character in a string
// Example: Input: "ammmit" Output: "m"
// Time Complexity: O(n)
// Space Complexity: O(n)
//author: Amit Kumar

function highestRepeatingChar(str){
    let result ={}
    let maxchar=""
    let maxcount =0;
    for(let i=0;i<str.length;i++){
        result[str[i]]=(result[str[i]] || 0) + 1;
        if(result[str[i]] >maxcount){
            maxcount =result[str[i]]
            maxchar = str[i]
        }
    }
    return maxchar
}
console.log(highestRepeatingChar("ammmit"))