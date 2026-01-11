function sqeu(num){
    console.log(num*num)
}
function throttle(fn,limit){
    let lastcall =0;
    return function(...arg){
        let now =Date.now()
        if(now -lastcall >= limit){
            lastcall =now;
            fn.apply(this,arg)
        }
    }
}
let thr = throttle(sqeu, 700); // 700ms better 
thr(7);