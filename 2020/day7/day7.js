const createDominos = (start, end) => {
    const dominos = [];

    for (let i = start; i <= end; i += 1) {
        for (let j = i; j <=end; j += 1) {
            dominos.push([i, j]);
        }
    }

    return dominos;
}

const sumDominos = dominos => dominos.flat().reduce((acc, val) => {
    return acc += val;
}, 0);

console.log('Test with dominos from 0 - 5');
console.log('Solution is', sumDominos(createDominos(0, 4)));
console.log(' ');
console.log('Dominos from 5 - 10');
console.log('Solution is', sumDominos(createDominos(5, 10)));
