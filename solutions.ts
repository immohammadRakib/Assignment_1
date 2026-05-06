
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

type StringOrNumber = string | number;

function checkType(input: StringOrNumber){
        if(typeof input === "string"){
             return "String";
        }else{
                return "Number";
        }
}
const check1 = checkType("raqeb");
const check2 = checkType(43);
console.log(check1);
console.log(check2);

// Problem - 4

function getProperty< T,K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
const userName = getProperty(user, "name");
console.log(userName);

// Problem - 5

