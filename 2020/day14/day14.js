let result = 0;

for (let i = 10; i <= 999; i += 1) {
    const str = String(i).split(''); // returns an array

    if (new Set(str).size === str.length) {
        result += 1;
    }
}

console.log(result);
