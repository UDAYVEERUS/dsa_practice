const fetchData = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data = "i have been resolved"
            resolve(data)
    
            reject("Error ocurred")
        },2000)
    })
}

const getData = async() => {
    try{
        const result = await fetchData()
        console.log("Success : ", result)
    }catch(error){
        console.log(error)
    }
}
getData()
