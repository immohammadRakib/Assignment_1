
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

interface Book {
        tittle: string;
        author : string;
        ublishedYear: number;
}

function toggleReadStatus(book: Book){
        return {
                ...book,
                isRead: true
        }
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(myBook);



// Problem - 6

class Person {
        name: string;
        age: number;

        constructor(name: string, age: number){
                this.name = name,
                this.age = age
        }
}

class Student extends Person {
        grade: string;
        
        constructor(name: string, age: number, grade: string){
                super(name, age)
                this.grade = grade

        }
        getDetails(){
                console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`)
        }
}

const student = new Student("Alice", 20, "A");
student.getDetails();



// Problem - 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
        return arr1.filter(value => arr2.includes(value))
}

const result = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
console.log(result);