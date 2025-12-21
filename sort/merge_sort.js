
// Merge Sort Implementation in JavaScript
// Time Complexity: O(n log n)
// Space Complexity: O(n) due to temporary arrays
//  Author: Amit Kumar
function mergeSort(arr){
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    // console.log("mid",mid)
    let left = mergeSort(arr.slice(0, mid));
    // console.log("left",left)
  let right = mergeSort(arr.slice(mid));
//   console.log("right",right)

  return merge(left, right);
    
}
function merge(left , right){
   let result =[]
   let i=0;
   let j=0;
   while(i<left.length && j <right.length){
       
       if(left[i] <= right[j]){
           result.push(left[i])
           i++
       }else{
           result.push(right[j])
           j++ 
       }
   }
   console.log(left.slice(i),right.slice(j))
   return  result
    .concat(left.slice(i))
    .concat(right.slice(j));
}
console.log(mergeSort([4, 1, 5, 2, 3]))

