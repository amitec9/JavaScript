// Left Rotate Array one
let rotateArray=(arr)=>{
    let size = arr.length;
    let last = arr[0]
    for(let i=0;i<size-1;i++){
        arr[i] = arr[i+1]
    }
    arr[size -1]=last
    return arr;
}

console.log(rotateArray([1,2,3,4,5]));//[2,3,4,5,1]