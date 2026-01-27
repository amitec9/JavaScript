//  Count Vowels in String
let countVowelsString=(str) =>{
  let count =0
  let vowels = "aeiou";
  for(let ch of str.toLowerCase()){
     if(vowels.includes(ch)) count++
  }
  return count
}
console.log(countVowelsString("amit kumar"))