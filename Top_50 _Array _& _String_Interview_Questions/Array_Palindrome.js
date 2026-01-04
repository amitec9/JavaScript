//    Check Array Palindrome
let array=(arr)=>{
    let left =0;
    let right = arr.length-1;
    while(left <right){
        if(arr[left] !== arr[right]){
          return false  
        }
        left++;
        right--
    }
    return true
}
console.log(array([1,2,3,2,9,1]))