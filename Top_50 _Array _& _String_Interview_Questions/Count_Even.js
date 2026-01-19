// Count Even Numbers
function countEven(arr){
   let count =0;
   for(let i=0;i<arr.length;i++){
       if(arr[i] % 2 === 0){
           count++;
       }
   }
  
   return count;
}
console.log( countEven([
 1,2,3,6,0,8,10
]))