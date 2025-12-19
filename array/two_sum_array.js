/**
 *  Two Sum Problem
 *   Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *   You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *  Example:   
 *   Given nums = [2, 7, 11, 15], target = 9,
 *  Because nums[0] + nums[1] = 2 + 7 = 9,
 *  return [0, 1].
 *  Author :Amit Kumar
 * @param {} arr 
 * @param {*} target 
 * @returns 
 */

function twoSum(arr,target){
    let map =new Map();
    let result=[]
for(let i=0;i<arr.length;i++){
    if(map.has(target-arr[i])){
        console.log(target-arr[i],arr[i])
        result.push(map.get(target-arr[i]),i)
    }
    map.set(arr[i],i)
}
return result;
}
let arr=[11,3,7,5], target=10
console.log(twoSum(arr,target))