/**
 * Primitive types
 */
let myName = 'Bon';
// TS infers that the type of this variable is a string, and
// if we try to re-assign it to a number we get an error
// myName = 20; // 'Type number is not assignable to type string

// We can also set the type our self
let myName2: string = 'Lauren';

// Primitive data types: string, number, boolean
// Challenge: Explicitly type the variables below
let numberOfWheels: number = 4;
let isStudent: boolean = false;


/**
 * Custom types
 */
// We can create our own types with the type keyword
type Food = string;
let favoriteFood: Food = 'Pizza';
// Do not make a lot of sense with primitive types, but if talk about objects is make more sense
/*let person = {
    name: 'Joe',
    age: 42,
    isStudent: true,
}*/

// We can use this "formular" to make many versions of the person object
/*let person2 = {
    name: 'Jill',
    age: 66,
    isstudent: false,
}*/
// Here we have the same object but isstudent is with lower case instead of 'isStudent'
// We can make a custom type to prevent an error like this to happend
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
}
// Now we have to apply the correct spelling and type for each element, and we have to
// apply all elements
const person: Person = {
    name: 'jack',
    age: 42,
    isStudent: true,
}
const person2: Person = {
    name: 'Jill',
    age: 66,
    isStudent: false;
}

// We can also use nested properties in types

/*type Student = {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        street: string;
        streetNumber: number;
        city: string;
        country: string;
    }
}*/

// Instead of nested objects, we can make an address tupe and use that
type Address = {
    street: string;
    streetNumber: number;
    city: string;
    country: string
}

type Student = {
    name: string;
    age: number;
    isStudent: boolean;
    address: Address;
}

const student1: Student = {
    name: 'Dan',
    age: 43,
    isStudent: true,
    address: {
        street: 'Main St.',
        streetNumber: 546,
        city: 'Any City',
        country: 'USA',
    }
}

/**
 * Arrays
 */
// When we are working with arrays, we have to "mention" that it is an array we are dealing with
const ages: number[] = [23, 42];

type Kid = {
    name: string;
    age: number;
    inSchool:  boolean;
}

const kid1: Kid = {
    name: 'Billy',
    age: 3,
    inSchool: false,
}

const kid2: Kid = {
    name: 'Tina',
    age: 7,
    inSchool: true,
}

// Another way we can set the array of types
const kids: Array<Kid> = [kid1, kid2];

/**
* literal types
*/
//If we make a 'let' function, typescript infers that the type will be a string
let myName1 = 'Bob';
// but if we make a constant variable, the type will be literal with the value you provide
const myName8 = 'Lauren';
// that make sense because we are not allowed to change the value of a constant

/**
 * Union types
 */

// Literal types are mostly used in union types
type UserRole = "guest" | "member" | "admin";
// let userRole: UserRole = 'member';
// We create a type for a user
type User = {
    username: string;
    role: UserRole;
}

const users: User[] = [
    {username: 'John Doe', role: "member"},
    {username: 'Jane Doe', role: "admin"},
    {username: 'guest-user', role: "guest"},
];

// Typescript can in this example infer that the return rype will be 'User', but it is best,
// if we specify the return type. It is helpfull if we or another developer later on will
// refactor the code

const fetchUserDetails = (username: string): User => {
    const user = users.find(user => user.username === username);
    if (!user) {
        throw new TypeError('User not found');
    }
    return user;
}

// Like in a many other languages, a function that don't return  anythis is a void function
const add2 = (): void => console.log(2 + 2);

// Using the 'any' type is generally a bad idea, because you turn off type checking for that element
let value = 1;
// And we get an error if we try to change the value to another type

// Here typescript infers that the type is number, but if we give it the 'any' type, you
// can change it to a boolean or a string
let value2: any = 1;
value2 = 'cheese';
value2 = false;
// Here TS is working just like javascript

// Instead of the 'any' type, in case we need to figure the type out, e.g. if we convert
// a JS project to TS
let number10: unknown = 3;
number10 = 'jack';
// and it works the same way as the 'any' type


/**
 * Utility types and partials
 */

type Pupil = {
    id: number;
    name: string;
    grade: number;
}

let nextPupilId: number= 1;

const pupils: Pupil[] = [
    {id: nextPupilId++, name: 'Brian', grade: 3},
    {id: nextPupilId++, name: 'Inga', grade: 1},
    {id: nextPupilId++, name: 'Tina', grade: 5},
    {id: nextPupilId++, name: 'Bo', grade: 5},
];

const updatePupil = (id: number, updates: any): void => {
    pupils.find(pupilId:  => pupild === id);
}


