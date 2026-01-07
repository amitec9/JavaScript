//Selection Sort
// Selection Sort selects the smallest element from the unsorted part and swaps it with the current position.
//Selection Sort is a simple comparison-based sorting algorithm.
function selectionSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
               minIndex=j; 
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]] =[arr[minIndex],arr[i]]
        }
    }
    return arr;
}
console.log(selectionSort([64, 25, 12, 22, 11]));