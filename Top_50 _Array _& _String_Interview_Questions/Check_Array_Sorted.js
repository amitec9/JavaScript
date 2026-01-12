//Check Array is Sorted 
function checkArray(arr){
   for(let i =0;i<arr.length-1;i++){
       if(arr[i]>arr[i+1]){
           return "Not sorted"
       }
   } 
   return "sorted"
}
console.log(checkArray([
 1,2,3,6,0
])) // Output: Not sorted
console.log(checkArray([
 1,2,3,4,5,6,7,8
])) // Output: sorted