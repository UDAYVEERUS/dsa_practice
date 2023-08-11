let complete = true;

let prom = new Promise(function(resolve, reject){
    if(complete){
        resolve("I am successfully")
    }
    else{
        reject('Some error ocurred')
    }
})
console.log(prom)

function promise(complete){
    return new Promise((resolve, reject)=>{
        if(complete){
            resolve("I am success")
        }else{
            reject('some error ocurred')
        }
    })
}
let onFullfillment = (result) => {
    console.log(`result is`,  result)
}
let onReject = (error) => {
    console.log(error)
}

promise(true).then(onFullfillment)
promise(true).catch(onReject)