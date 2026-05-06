
// Problem - 1

function filterEvenNumbers(nums: number[]): number[] {
        return nums.filter((num) => num % 2 === 0);
}

const num1 = filterEvenNumbers([1,2,3,4,5,6,7,8,]);
console.log(num1);

// Problem - 2

function reverseString(input: string): string{
        return input.split('').reverse().join('');
}
const reverse = reverseString("typescript");
console.log(reverse);

// Problem - 3

