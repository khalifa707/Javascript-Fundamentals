/*//Arrays

const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

console.log(mixed);
console.log(numbers);

// Get value by index
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

// length is not read-only
// fruits.length = 2;

fruits[3] = 'strawberry';

// Using the length as the index will always add on the the end
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);*/

const arr = [28, 38, 44, 29, 109];
// push() - Push a value on to the end of the array
arr.push(100);
// pop() - Take the last value off
arr.pop();
// unshift() - Add a value to the beginning of the array
arr.unshift(99);
// shift() - Remove first value
arr.shift();
// reverse() - Reverse an array
arr.reverse();

console.log(arr);
