const fetchData = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data = "i have been resolved"
            resolve(data)
    
            reject("Error ocurred")
        },2000)
    })
}

fetchData().then((data)=>{
    console.log("Success :" ,data)
})
.catch((error)=>{
    console.log(error)
})