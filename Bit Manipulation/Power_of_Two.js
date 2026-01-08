var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
};

// Example usage:
console.log(isPowerOfTwo(1));   
console.log(isPowerOfTwo(2));   
console.log(isPowerOfTwo(3));   
console.log(isPowerOfTwo(4));   
console.log(isPowerOfTwo(5));
// 8  -> 1000
// 7  -> 0111
// 1000 & 0111 = 0 ✅
