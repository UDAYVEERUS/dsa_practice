function minJumpsToEnd(arr) {
    const n = arr.length;
    let jumps = 0;
    let farthest = 0;
    let currentEnd = 0;
  
    for (let i = 0; i < n - 1; i++) {
      farthest = Math.max(farthest, i + arr[i]);
  
      if (farthest >= n - 1) {
        jumps++;
        return jumps;
      }
  
      if (i === currentEnd) {
        if (farthest <= i) {
          return -1; // Cannot reach the end
        }
  
        jumps++;
        currentEnd = farthest;
      }
    }
  
    return -1; // Cannot reach the end
  }
  
  // Example usage:
  const arr = [2, 3, 1, 1, 4];
  const minJumps = minJumpsToEnd(arr);
  console.log("Minimum number of jumps:", minJumps);
  