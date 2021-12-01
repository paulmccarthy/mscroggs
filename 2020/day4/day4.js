// Could do this with modulo and subtraction,
// but char arrays will work fine, and are easier to follow.
const cubeAndSumDigits = (num) => {
    const first = Number(num.toString()[0]);
    const second = Number(num.toString()[1]);
    const third = Number(num.toString()[2]);

    return Math.pow(first, 3) + Math.pow(second, 3) + Math.pow(third, 3);
};

// work backwards as we want the higer of the two solutions
for (let i = 999; i >= 100; i -= 1) {
    const check = cubeAndSumDigits(i) === i;

    if (check) {
        console.log('Potential solution', i);
        if (cubeAndSumDigits(i - 1) === (i - 1)) {
            console.log(`Answer = ${i}`);
        }
    }
}
