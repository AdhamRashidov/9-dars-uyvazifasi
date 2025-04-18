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
    let kopaytma = arr.reduce((acc, arr) => acc * arr);
    return kopaytma;
}

console.log(func([3, 4]));
console.log(func([2, 4]));
console.log(func([12563, 723]));
*/


/* 
// 6. 
function returnVowel(arr) {
    let result = [];
    let kichikUnli = "auieo";
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        let vowels = '';

        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            if (kichikUnli.includes(char)) {
                vowels += char;
            }
        }
        result.push(vowels);
    }
    return result;
}

console.log(returnVowel(["Assalomu alaykum", "salom", "Najot ta'lim"]));
console.log(returnVowel(["Toshkent"]));
*/

/* 
// 7. Telefon raqamini formatlash.
function formatPhoneNumber(arr) {
    let birinchiQism = "";
    let ikkinchiQism = "";
    let uchinchiQism = "";
    let result = "";
    if (arr.length !== 10) {
         alert("Raqmlar soni 10 ta emas!")
    } else {
        birinchiQism = arr.slice(0, 3).join("");
        ikkinchiQism = arr.slice(3, 6).join("");
        uchinchiQism = arr.slice(6, 10).join("");
        result = `(+${birinchiQism}) ${ikkinchiQism} - ${uchinchiQism}`;
    }
    return result;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]));
console.log(formatPhoneNumber([9, 9, 8, 3, 5, 6, 2, 8, 7, 4]));
console.log(formatPhoneNumber([9, 9, 8, 2, 7, 6, 3, 7, 9, 0]));
console.log(formatPhoneNumber([9, 9, 8, 7, 2, 6, 7, 3, 3, 7]));
*/

/* 
// 8. Spelling it Out
function spelling(arr) {
    let result = [];
    for (let i = 1; i < arr.length + 1; i++) {
        result.push(arr.slice(0, i));
    }
    return result;
}

console.log(spelling("bee"));
console.log(spelling("happy"));
console.log(spelling("eagerly"));
 */
 

/* 
// 9. Chat Room Status 
function chatroomStatus(users) {
    const len = users.length;

    if (len === 0) {
        return "no one online";
    } else if (len === 1) {
        return `${users[0]} online`;
    } else if (len === 2) {
        return `${users[0]} and ${users[1]} online`;
    } else {
        return `${users[0]}, ${users[1]} and ${len - 2} more online`;
    }
}

console.log(chatroomStatus([]));
console.log(chatroomStatus(["paRIE_to"]));
console.log(chatroomStatus(["s234f", "mailbox2"]));
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));
*/


/* 
// 10. How Much is True?
function countTrue(arr) {
    const trueCount = new Map();

    arr.forEach((True) => {
        trueCount.set(True, (trueCount.get(True) || 0) + 1);
    });
    return trueCount;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
*/


// **********   BONUS   *********
/* 
                //  1.
function TubQaytar(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > 1 && isPrime(element)) {
            result.push(element);
        }
    }
    return result;
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(TubQaytar([12, 3, 2, 5, 84, 11, 562, 571]));
*/

/* 
// 2. 
function multiply(arr) {
    return function inner(num, i = 0, result = []) {
        if (i >= arr.length) {
            return result;
        }
        result.push(arr[i] * num);
        return inner(num, i + 1, result);
    };
}

console.log(multiply([1, 2, 3])(2));   
console.log(multiply([4, 6, 5])(10));
console.log(multiply([1, 2, 3])(0)); 
*/  
