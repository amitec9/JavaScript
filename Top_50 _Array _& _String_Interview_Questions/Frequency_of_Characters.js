//  Find Frequency of Characters 
let frequencyCharacterString =(str) =>{
  if (str.length === 0) return "";
  let result ={}
  for(let i=0;i<str.length;i++){
    if(str[i] !== " "){
        result[str[i]]=( result[str[i]] || 0)+1
    }
  }
  return result;
}
console.log(frequencyCharacterString("hello world"))