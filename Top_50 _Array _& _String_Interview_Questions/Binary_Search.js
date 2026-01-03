//Binary search in array
function binarySearch(arr,key){
   let left  =0;
   let right = arr.length-1;
   while(left <= right){
       let mid = Math.floor((left + right) / 2);
       if(arr[mid] === key){
           return mid
       }else if(arr[mid] < key){
          left = mid+1
       }else{
           right = mid-1
       }
   } 
   return -1
}
console.log( binarySearch([
 1,2,3,6,0
],3)) // Output: 2
console.log( binarySearch([
 1,2,3,6,0
],5)) // Output: -1