//Bubble Sort
let bubbleSort =(arr) =>{
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j] <arr[j+1]){
                 [arr[j] ,arr[j+1]]=[arr[j+1] ,arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5,2,6,8]))//[8,6,5,2]
console.log(bubbleSort([3,0,1,4,2]))//[4,3,2,1,0]