//  Check Anagram 
let checkAnagramString =(str1,str2) =>{
  // remove spaces & lowercase
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();
  if (str1.length !== str2.length) return false;
  let result ={}
  for(let i=0;i<str1.length;i++){
    if(str1[i] !== " "){
        result[str1[i]]=( result[str1[i]] || 0)+1
    }
  }
  for(let ch of str2){
      if(!result[ch]){
         return false; 
      }
      result[ch]--
  }
  return true;
}
console.log(checkAnagramString("listen", "silent"))
console.log(checkAnagramString("triangle", "integral")``)