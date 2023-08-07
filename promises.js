// writing promise function with async await 
const getData = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data = "I am resolved"
            resolve(data)
        },2000)
    })

}

const fetchData = async() => {
    try{
        const data = await getData()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
   
}
fetchData()