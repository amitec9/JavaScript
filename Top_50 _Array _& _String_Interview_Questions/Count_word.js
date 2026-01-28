//  Count Words in String 
let countWordsString=(str) =>{
      if (str.length === 0) return 0;
  let count =1
  for(let ch of str){
     if(ch === " ")count++
  }
  return count
}
console.log(countWordsString("Hello world from Amit"))