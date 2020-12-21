const sumXtoY = (x, y) => (y * (y + 1) / 2) - ((x - 1) * x /2);

const potentialNumbers = [];
const numbersWithBoth = [];

// check all the numbers that could have 13 consecutive numbers
for (let n = 100; n < 1000; n += 1) {
    let startingPoint = Math.floor(n / 2); // largest number of the sum is half of n

    while (startingPoint > 0) {
        if (sumXtoY(startingPoint - 13, startingPoint) === n) {
            potentialNumbers.push(n);
        }

        startingPoint -= 1;
    }
}

// check all the potential answers for 12 consecutive numbers
potentialNumbers.forEach((num) => {
    let startingPoint = Math.floor(num / 2);

    while (startingPoint > 0) {
        if (sumXtoY(startingPoint - 12, startingPoint) === num) {
            numbersWithBoth.push(num);
        }

        startingPoint -= 1;
    }
});

// sort the array numerically and return the first element
// javascript converts the array elements to strings first then sorts, so a proper numeric comparison should be made.
const answer = numbersWithBoth.sort((a, b) => a - b)[0];

console.log(`Answer = ${answer}`);
