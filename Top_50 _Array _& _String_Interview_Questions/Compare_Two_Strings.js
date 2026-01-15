//  Compare Two Strings 
//To compare strings, check lengths first, then compare characters one by one. For exact match, use ===.
let compareString =(str1 , str2) =>{
  if (str1.length !== 0 && str2.length == 0) return false;
  for(let i=0;i<str1.length;i++){
      if(str1[i] !== str2[i]){
          return false
      }
  }
  return true
}
console.log(compareString("Amit","amit")); // false
console.log(compareString("Hello","Hello")); // true
console.log(compareString("JavaScript","JavaScript")); // true