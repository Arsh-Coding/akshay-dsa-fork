//set bit, get bit, clear bit

// Function to get the bit at the
// ith position
function getBit(num, i) {
    // 1000110 & 0001000 = 0000000
    // << operator is left shift operator
    // 1 << 3 = 1000
    return ((num & (1 << i)) != 0);
}

// Function to set the ith bit of the
// given number num
function setBit(num, i) {

    // Sets the ith bit and return
    // the updated value
    return num | (1 << i);
}

// Function to clear the ith bit of
// the given number num
function clearBit(num, i) {

    // Create the mask for the ith
    // bit unset
    //~(1<<0) = ~(1) = 00000000000000000000000000000001 = 11111111111111111111111111111110 
    let mask = ~(1 << i);

    // Return the updated value
    //1000111 & 11111111111111111111111111111110 = 1000110
    return num & mask;
}

// Driver code

// Given number N
let N = 70;
//bit for 70 - 1000110

console.log("The bit at the 3rd position from LSB is: " +
    (getBit(N, 3) ? '1' : '0'));

console.log("The value of the given number " +
    "after setting the bit at " +
    "LSB is: " + setBit(N, 0));

console.log("The value of the given number " +
    "after clearing the bit at " +
    "LSB is: " + clearBit(N, 0));
