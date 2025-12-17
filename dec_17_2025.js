let f = "8";
let a = 1;
console.log((+f)+a+1);//10

// let a = 10;
if(true){
  let a = 20;
  console.log(a, "inside"); //20
}
console.log(a, "outside"); //10
console.log(5 < 6 < 7); //true
console.log(7 > 6 > 5); //false
const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')


const runPromises = async () => {
const res1 = await Promise.all([promise1, promise2])
return [res1]
}
runPromises()
.then(res => console.log(res))
.catch(err => console.log(err))