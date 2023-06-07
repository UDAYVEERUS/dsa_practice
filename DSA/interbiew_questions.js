// 1 - Count the frequency of a given character in the given string.

function countCharFrequency(str, char){
    var count = 0;
    for(var i=0;i<str.length;i++){
        if(str.charAt(i) === char){
            count++
        }
    }
    return count
}
var myString = "hello, world"
var myChar = "l"

console.log(countCharFrequency(myString, myChar))

// 2 - Explain the concept behind circular queue.

// A circular queue is the extended version of the regular queue where the last element is connected to the first element.