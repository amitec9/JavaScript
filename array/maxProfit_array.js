// Find the maximum profit from a list of stock prices where you can only buy and sell once.
// Example: Input: [7, 1, 5, 3, 6, 4] Output: 5 (Buy at 1 and sell at 6)
// Time Complexity: O(n)
// Space Complexity: O(1)
//Author: Amit Kumar
function maxProfit(arr){
    let min=arr[0]
      let maxProfit = 0;
    for(let i=0;i<arr.length;i++){

        if(arr[i] < min){
           min =arr[i]
        }else{
            maxProfit = Math.max(maxProfit ,arr[i]-min)
        }
        
       
    }
    return maxProfit
}
let arr =  [7, 1, 5, 3, 6, 4]
console.log(maxProfit(arr))