// Find Duplicate Elements 
// Author : Amit kumar
function duplicateElement(arr){
   let seen = new Set();
   let d = new Set()
   for(let i=0;i<arr.length;i++){
       if(seen.has(arr[i])){
            d.add(arr[i])
        }else{
          seen.add(arr[i])
       }
   }
  
   return [...d];
}
console.log( duplicateElement([10, 8,8,8 ,9,9])) // Output: [8,9]
console.log( duplicateElement([1,2,3,6,0,8,5,1,3,5])) // Output: [1,3,5]