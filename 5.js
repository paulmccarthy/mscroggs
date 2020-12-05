const s = 6;
const r1 = 521;
const r2 = 200;

const factorial = (num) => {
    if (num < 0) {
        throw new Error(`Negative factorial for ${num}!`);
    }

    if (num === 0) return BigInt(1);

    let result = BigInt(num);

    for (let i = num - 1; i > 0; i -= 1) {
        result = result * BigInt(i);
    }

    return result;
};

const combination = (n, r) => {
    const nFact = factorial(n);
    const rFact = factorial(r);
    const nMinusRFact = factorial(n - r);

    return nFact / (rFact * nMinusRFact);
};

const bigPow = (base, exp) => BigInt(Math.pow(base, exp));

const sum = (r, n) => {
    const limit = Math.floor((r - n) / 6);
    let result = BigInt(0);

    // console.log(`Calculating for r = ${r}, n = ${n}`);

    for (let k = 0; k <= limit; k += 1) {
        // console.log('k = ', k);

        const val = r - (6 * k) - 1;
        // console.log('val = ', val);

        const p1 = bigPow(-1, k);
        // console.log('p1 = ', p1)

        const p2 = combination(n, k);
        // console.log('p2 = ', p1)

        const p3 = combination(val, (n - 1));
        // console.log('p3 = ', p3)

        result += p1 * p2 * p3;
    }

    return result;
}

const calculate = () => {
    for (let n = 200; n >= 100; n -= 1) {
        const result1 = sum(r1, n);
        const result2 = sum(r2, n);

        if (result1 === result2) {
            console.log(`The number of dice is ${n}`);
            console.log('='.repeat(40));
            console.log('*'.repeat(40));
            console.log(result1);
            console.log('*'.repeat(40));
            console.log(result2);
            console.log('*'.repeat(40));
            console.log('='.repeat(40));
        }
    }
}

calculate();
