/**
 *
 * return Anagrams array
 * @param {string} str
 */
function anagrams(str) {
    if (str.length <= 2) {
        return str.length === 2 ? [str, str[1] + str[0]] : [str];
    } else {
        return str.split('').reduce((acc, letter, i) => {
            return acc.concat(this.anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val));
        }, []);
    }
}

/**
 * 
 * array average
 * @param {any} numArr 
 * @returns 
 */
function average(numArr) {
    if (numArr.length === 0) {
        return 0;
    } else {
        return numArr.reduce((num, value) => {
            return num + value;
        }, 0) / numArr.length;
    }
}

/**
 *
 * make every word capitalize
 * @param {string} str => word
 */
function wordCapitalize(str) {
    return str.replace(/\b[a-z]/g, (word) => {
        return word.toUpperCase();
    });
}

/**
 *
 * judge a number's repeat count from a Array
 * @param {Array<any>} array
 * @param {*} value
 * @returns {number}
 */
function judgeValueRepeat(array, value) {
    return array.reduce((acc, val) => {
        return val === value ? acc + 1 : acc;
    }, 0);
}

/**
 *
 * factorial n!
 * @param {number} num => number
 * @returns {number}
 * @memberof MethodComponent
 */
function factorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * this.factorial(num - 1);
    }
}

/**
 *
 * fibonacci
 * @param {number} len => length
 * @returns {number[]}
 */
function fibonacci(len) {
    return Array(len).fill(0).reduce((fib, value, index) => {
        return fib.concat(index >= 2 ? fib[index - 1] + fib[index - 2] : index);
    }, []);
}

/**
 * 
 * num1 and num2 of gcd
 * @param {any} num1 
 * @param {any} num2 
 * @returns 
 */
function gcd(num1, num2) {
    return !num2 ? num1 : this.gcd(num2, num1 % num2);
}