
Promise.myRace =function(data){
  return new Promise((res,rej)=>{
  for (let p of data){
        Promise.resolve(p).then(res).catch(rej)
    }
  })
}

Promise.myAny = function(data){
  return new Promise((res,rej)=>{
    let arr = Array.from(data)
     const len = arr.length;

    if (len === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }
    
    let rejections = 0;
    const errors = new Array(len);
    arr.forEach((p, i) =>{
      Promise.resolve(p)
        .then(value => {
          // first success wins
          res(value);
        })
        .catch(err => {
          errors[i] = err;
          rejections++;

          if (rejections === len) {
            // all failed
            rej(new AggregateError(errors, "All promises were rejected"));
          }
        });
    })
  })
} 
Promise.myAllSettled = function(data){
  return new Promise((res)=>{
     const arr = Array.from(data);
    const len = arr.length;

    if (len === 0) {
      return resolve([]);
    }

    const results = new Array(len);
    let finished = 0;
    arr.forEach((p,i)=>{
        Promise.resolve(p).then(value=>{
 results[i]={
            status: "fulfilled",
            value
        }
      }).catch( reason=>{
 results[i]={
            status: "rejected",
            reason
        }
      }
        
      ).finally(()=>{
         finished++;
          if (finished === len) {
            res(results);
          }
      })

    })
    
  })
}

Promise.myAll = function (data) {
  return new Promise((resolve, reject) => {
    const arr = Array.from(data);
    const len = arr.length;

    if (len === 0) {
      return resolve([]);
    }

    const results = new Array(len);
    let finished = 0;

    arr.forEach((p, i) => {
      Promise.resolve(p)
        .then(value => {
          results[i] = value;
          finished++;

          // If all promises have resolved, resolve final result
          if (finished === len) {
            resolve(results);
          }
        })
        .catch(reason => {
          // Reject immediately if any promise fails
          reject(reason);
        });
    });
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.reject("fail");
const p3 = 3;

Promise.myAllSettled([p1, p2, p3]).then(console.log);
Promise.myAny([p1, p2, p3]).then(console.log);
Promise.myRace([p1, p2, p3]).then(console.log);
Promise.myAll([p1, p3]).then(console.log);

