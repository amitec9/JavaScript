function sqeu(num){
    return num*num
}
function memorization(fn){
    let cach={}
    return function(n){
        if(n in cach){
            return cach[n]
        }
        let result = fn(n)
        cach[n]=result;
        return result;
        
    }
}
let mem = memorization(sqeu)
console.log(mem(5))