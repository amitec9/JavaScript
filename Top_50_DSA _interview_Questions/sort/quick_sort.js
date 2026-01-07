// Quick Sort Implementation in JavaScript
// Time Complexity: O(n log n) on average
// Space Complexity: O(log n) due to recursive stack space  
//  Author: Amit Kumar
function QuickSort(arr){
    if(arr.length <= 1 ) return arr;
    
  const pivot = arr[arr.length - 1];
  console.log(pivot)
  const left = [], right = [];
  
    for(let i=0;i<arr.length -1;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
   
    return [...QuickSort(left),pivot,...QuickSort(right)]
    
}

console.log(QuickSort([3,2,34,5,6,1]))