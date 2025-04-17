/* 
// 1. Number Split | Sonni qismga ajratish
function numberSplit(num) {
    let left = Math.floor(num / 2);
    let right = num - left;
    return [left, right];
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
*/

/*
// 2. Sum of Cubes
function sumOfCubes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        sum += item ** 3;
    }
    return sum;
}

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));
*/

/* 
// 3. Find the Smallest and Biggest Numbers
function minMax(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1, 23, 4, 12, 53, 63, 12, 42, 24, 21, 9, 23, 28, 48, 27]));
*/

/*
// 4. Birinchi toq sonni topish
function findPrimeNumber(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element % 2 !== 0) {
            result = element;
            break;
        }
    }
    return result;
}

console.log(findPrimeNumber([4, 12, 42, 9, 12, 3]));
console.log(findPrimeNumber([123, 42, 93, 21, 11]));
console.log(findPrimeNumber([42, 32, 5, 23, 4, 2, 43]));
*/

/* 
// 5. '*' ishlatmasdan ko'paytmani hisoblash. 
function func(arr) {
    let kopaytma = arr.reduce((acc, num) => acc * num);
    return kopaytma;
}

console.log(func([3, 4]));
console.log(func([2, 4]));
console.log(func([12563, 723]));
*/

// 6. 