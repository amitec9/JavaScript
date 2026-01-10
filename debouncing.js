function sqeu(num){
    console.log(num*num)
}
function debouncing(fn,delay){
    let timer;
    return function(...arg){
        clearTimeout(timer)
        timer = setTimeout(()=>{fn.apply(this,arg)},delay)
    }
}
let deb =debouncing(sqeu,7000)
deb(7)