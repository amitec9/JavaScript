// Algorithm to check if a string of parentheses is valid
// A valid string means every opening bracket has a corresponding closing bracket in the correct order
// Example: "([{}])" is valid, "([)]" is not valid
// Time Complexity: O(n)
// Space Complexity: O(n)
// Author: Amit Kumar

function isValid(str){
    let stack =[]
    for(let i=0;i<str.length;i++){
        let ch = str[i]
        if(ch === "(" || ch === "[" || ch === "{"){
            stack.push(ch)
        }else{
            if (stack.length === 0) return false;
            let last = stack.pop();
            if((ch === ')' && last !== '(') || (ch === ']' && last !== '[')|| (ch === '}' && last !== '{')){
                return false
            }
        }
    }
    
   return stack.length === 0;
}
// ✅ Test cases
console.log(isValid("()"));        // true
console.log(isValid("([{}])"));    // true
console.log(isValid("{[()]}"));    // true

console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("((("));       // false
console.log(isValid(""));          // true