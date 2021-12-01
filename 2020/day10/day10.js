const sum = (num) => {
    const str = String(num);
    let sum = 0;

    for (let i = 0; i < str.length; i += 1) {
        sum += Number(str[i]);
    }

    return sum;
}

let min = 1000;

for (let i = (24 * 5); i < 1000; i += 24) {
    if (sum(i) === 24 && i < min) {
        min = i;
    }
}

console.log(min);
