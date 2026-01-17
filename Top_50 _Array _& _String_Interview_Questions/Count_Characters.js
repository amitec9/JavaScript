//  Count Characters in String 
//Traverse the string and increment a counter for each character.
// 🔑 Important Note

// Strings are immutable

// Traversal is allowed, modification is not
let countCharactersString=(str) =>{
  let count =0
  
  for(let ch of str){
     if(ch !== " ") count++
  }
  return count
}
console.log(countCharactersString("amit kumar"))