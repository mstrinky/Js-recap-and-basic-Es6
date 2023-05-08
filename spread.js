const numbers = [22,11,21,34,32,25];
const largest = Math.max(...numbers);
console.log(largest);

// ... dile NaN asbe na 
const numbers2 = [numbers];
numbers.push(55);
console.log(numbers);
console.log(numbers2);