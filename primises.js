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