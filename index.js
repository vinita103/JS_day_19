// 1. Write a function that reverses a number.

function reverseNum(num) {
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}

console.log(reverseNum(1234567));

// 2. Write a function that returns a passed string with letters in alphabetical order.

function alphabetorder(str) {
    return str
        .split('')
        .sort()
        .join('');
}

console.log(alphabetorder("vinitabhoop"));


// 3. Write a function that accepts a string as a parameter and converts the first letter of each word of the string to uppercase.

function upper() {
    const mySentence = "today's test was easy";
    const words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(" ");

}

console.log(upper());

// 4. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function test_prime(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function test_all_prime(arr) {
    for (let element in arr) {
        if (!test_prime(arr)) {
            return false;
        }
    }
}

console.log(test_prime(47));

// 5.  Write a function to extract unique characters from a string.

function findUnique(str) {

    let uniq = "";

    for (let i = 0; i < str.length; i++) {

        if (uniq.includes(str[i]) === false) {

            uniq += str[i]
        }
    }
    return uniq;
}

console.log(findUnique("it's beautiful day today"))

//   Write a function that will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function Second_Greatest_Lowest(arr_num) {
    arr_num.sort(function (x, y) {
        return x - y;
    });
    let uni = [arr_num[0]];
    let result = [];

    for (let j = 1; j < arr_num.length; j++) {
        if (arr_num[j - 1] !== arr_num[j]) {
            uni.push(arr_num[j]);
        }
    }
    result.push(uni[1], uni[uni.length - 2]);
    return result.join(',');
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));

//  Write a function to apply the Bubble Sort algorithm to a given array.

function bubbleSort(arr) {
    let swap;
    let n = arr.length - 1;
    let x = arr;
    do {
        swap = false;
        for (let i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                let value = x[i];
                x[i] = x[i + 1];
                x[i + 1] = value;
                swap = true;
            }
        }
        n--;
    } while (swap);
    return x;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

module.exports = {
    reverseNum: reverseNum,
    bubbleSort: bubbleSort,
    test_prime: test_prime,
    test_all_prime: test_all_prime
}

