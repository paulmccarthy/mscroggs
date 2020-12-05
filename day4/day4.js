// find a 3 digit number where the number is the sum of the cubes of it's digits
// this number - 1 also has this property

// brute force attempt
const cubeAndSumDigits = (num) => {
    const first = Number(num.toString()[0]);
    const second = Number(num.toString()[1]);
    const third = Number(num.toString()[2]);

    return Math.pow(first, 3) + Math.pow(second, 3) + Math.pow(third, 3);
};

for (let i = 999; i >= 100; i -= 1) {
    const check = cubeAndSumDigits(i) === i;

    if (check) {
        console.log('Potential solution', i);
        if (cubeAndSumDigits(i - 1) === (i - 1)) {
            console.log(`Answer = ${i}`);
        }
    }
}
