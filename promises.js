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


// reversing array with its type
const  reversingArray = (arr) =>{
    
    const reversingArray = arr.slice().reverse()

    for(let i=0; i < reversingArray.length; i++){
        if(typeof reversingArray[i] === "string"){
            reversingArray[i] = reversingArray[i].split('').reverse().join('')
            
        }
    }
    return reversingArray
}

const array = [1,2,4,3,"hello", "udayveer"]
console.log(reversingArray(array))