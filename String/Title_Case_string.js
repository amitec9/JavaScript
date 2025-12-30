// Convert String to Title Case
// Example Input: "hello world"
// Example Output: "Hello World"
// Example Input: "aMiT kuMar"
// Example Output: "Amit Kumar"
// Time Complexity: O(n)
// Space Complexity: O(n)
//  Author: Amit Kumar
function toTitleCase(str){
    return str.toLowerCase().split(" ")
    .map(word => word[0].toUpperCase()+word.slice(1))
    .join(" ")


}
console.log(toTitleCase("Amit kumar"))