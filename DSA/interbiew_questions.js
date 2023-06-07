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

// 3 - Rotate a matrix in a clockwise direction.

function rotateMatrixClockwise(matrix){
    const rows = matrix.length;
    const cols  = matrix[0].length

    const rotatedMatrix = new Array(cols)
    for(let i=0; i<cols;i++){
        rotatedMatrix[i] = new Array(rows)
    }
    for(var i=0;i<rows;i++){
        for(var j=0;j<cols;j++){
            rotatedMatrix[j][rows-1-i] = matrix[i][j] 
        }
    }
    return rotatedMatrix
}

const matrix = [[1,2,3],
[4,5,6],
[7,8,9]]
console.log(rotateMatrixClockwise(matrix))