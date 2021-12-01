// a few different ways to break a number into it's digits
const getDigitsAsArrayofStrings = num => [...String(num)];
const getDigitsAsArrayOfNumbers = num => [...String(num)].map(n => Number(n));
const getDigits = (num) => {
    const a = Math.floor(num / 100);
    const b = Math.floor((num - (a * 100)) / 10);
    const c = Math.floor((num - (a * 100) - (b * 10)));
};

// we can also directly calculate the sum of the digits
const sumOfDigits = num => [...String(num)].reduce((acc, n) => acc + Number(n), 0);
const sumOfDigitsBy48 = num => sumOfDigits(num) * 48;

for (let i = 100; i <= 999; i += 1) {
    if (sumOfDigitsBy48(i) === i) {
        console.log(`Solution is ${i}`);
    }
}
