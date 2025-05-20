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


