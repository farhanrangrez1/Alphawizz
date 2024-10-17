let data = [5, 7, 6, 7, 7, 8, 9];
let data1 = 0;
let mean;

for (let index = 0; index < data.length; index++) {
    data1 = data[index] + data1;
}

mean = data1 / data.length;
console.log( data1);
console.log( mean);

function bubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

const number = bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
console.log(number);
console.log(number.length);

if (number.length % 2 !== 0) {
    let midIndex = Math.floor(number.length / 2);
    console.log(number[midIndex]);
} else {
    let midIndex = number.length / 2;
    let nextIndex = midIndex - 1;
    console.log( number[midIndex], number[nextIndex]);
}

function findMode(arr) {
    if (arr.length === 0) return null;

    let mode = arr[0];
    let maxCount = 0;

    for (let index = 0; index < arr.length; index++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[index] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mode = arr[index];
        }
    }
    return mode;
}

const result1 = findMode(number);
console.log( result1);

function calculate(prise) {
    const Value = [500, 200, 50, 20];
    const store = [];

    for (let i = 0; i < Value.length; i++) {
        let count = 0;
        while (prise >= Value[i]) {
            prise = prise - Value[i];
            count++;
        }
        if (count > 0) {
            store.push({ Value: Value[i], count: count });
        }
    }
    return store;
}

const prise = 754;
const output = calculate(prise);
console.log(output);