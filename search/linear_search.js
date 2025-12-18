// Linear Search Algorithm in JavaScript

// Checks each element one by one in sequence.

// Time Complexity: O(n)

// Works on both sorted and unsorted data.

//Author: Amit Kumar

function linearSearch(arr,target){
    for(let count =0;count<arr.length;count++){
        if(arr[count] == target){
            return count+1;
        }
    }
    return -1;
}



console.log(linearSearch([1,2,3,4,5,6], 4))