// let sum=0;
// const calc =n=>{
//     for(let i=0;i<=n;i++){
//         sum+=1;
//     }
//     return sum;
// };

// const memorize=func=>{
//     let cache={};
//     return function(...args){
//         let n=args[0];
//         if(n in cache){
//             console.log('Data is coming from cache')
//             return cache[n]
//         }else{
//             console.log('Calculating the first time...')
//             let result=func(n);
//             cache[n]=result;
//             return result;
//         }
//     }
// }

// console.log('BEFORE MEMORIZATION')
// console.log(calc(5))
// console.log('AFTER MEMORIZATION')

// console.log('========AFTER OPTIMIZATION===========')
// console.log('BEFORE MEMORIZATION')
// console.time()
// let efficiently=memorize(calc);
// console.log(efficientWay(50000))
// console.timeEnd()

function sum(...rest){
    return rest.reduce((accumulator,currentValue)=>accumulator+currentValue)
}
// console.log(sum(10,1000,10000))
let keys=["shahsi","manu",10]
console.log(JSON.stringify(keys))
const MemorizedFun=func=>{
    let cache={};
    return function(...args){
       let keys=JSON.stringify(args)
       if(cache[keys]){
        console.log(cache)
        console.log('DATA IS COMING FROM CACHE')
        return cache[keys]
       }
       else{
        console.log("FIRST TIME EXECUTING...AND CALCULATING");
        const result=func(...args)
        cache[keys]=result;
        return result;
       }
    }


}

let calculate=MemorizedFun(sum)
console.time()
console.log(calculate(10,10,10))
console.timeEnd()

//second time

console.warn('===================SECOND TIME AFTER SAME INPUT')
console.time()
console.log(calculate(10,10,10))//! this line is coming from cache beacause of same input value
console.timeEnd()