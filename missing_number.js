function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2; // Calculate the sum of numbers from 1 to n
  
    const arraySum = arr.reduce((sum, num) => sum + num, 0); // Calculate the sum of the given array
  
    const missingNumber = totalSum - arraySum; // The missing number is the difference between the total sum and the array sum
  
    return missingNumber;
  }
  
  // Example usage:
  const array = [1, 2, 4, 6, 3, 7, 8];
  const missingNumber = findMissingNumber(array);
  console.log("The missing number is:", missingNumber);
  