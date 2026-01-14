//Find Common Elements 
let commonElement=(arr1,arr2)=>{
  let s= new Set(arr2)  
  let result=[]
  for(let num of arr1){
      if(s.has(num)){
          result.push(num)
      }
  }
  return result;
}
console.log(commonElement([1,2,3,4], [3,4,5,6]))
