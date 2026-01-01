// Maximum Subarray Sum in an array using Kadane's Algorithm
// Example: Input: [-2,1,-3,4,-1,2,1,-5,4] Output: 6
// Explanation: The contiguous subarray [4,-1,2,1] has the largest sum = 6.
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(1) as we are using only constant extra space.    
//Author: Amit Kumar
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];

        if (currSum > maxSum) {
            maxSum = currSum;
        }

        if (currSum < 0) {
            currSum = 0;
        }
    }

    return maxSum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
// Explanation: The contiguous subarray [4,-1,2,1] has the largest sum = 6.
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(1) as we are using only constant extra space.