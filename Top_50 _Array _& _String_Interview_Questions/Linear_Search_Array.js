// Linear Search in Array 
function linearSearch(arr,key){
   for(let i =0;i<arr.length-1;i++){
       if(arr[i] == key){
           return i
       }
   } 
   return -1
}
console.log(linearSearch([
 1,2,3,6,0
],3)) // Output: 2
console.log(linearSearch([
 1,2,3,6,0
],5)) // Output: -1