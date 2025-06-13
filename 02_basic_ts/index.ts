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
    isStudent: false,
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
    pupilName: string;
    grade: number;
}

let nextPupilId: number= 1;

const pupils: Pupil[] = [
    {id: nextPupilId++, pupilName: 'Brian', grade: 3},
    {id: nextPupilId++, pupilName: 'Inga', grade: 1},
    {id: nextPupilId++, pupilName: 'Tina', grade: 5},
    {id: nextPupilId++, pupilName: 'Bo', grade: 5},
];

// instead of using the any type for the updates we provide we can make a type
// with optional keys for the updates. It is not sure which values that the user
// would like to update, so we can't use the Pupil type for this

// The problem is, that if we have a lot of element in our type it will take a long time
// to make our UpdatePupil type
/* type UpdatePupil = {
    id?:number;
    pupilName?: string;
    grade?: number;
} */
// Instead we can use a partial type like this
type UpdatePupil = Partial<Pupil>;
// It does the same that we did higher up in the code, now commented out

const updatePupil = (id: number, updates: UpdatePupil): void => {
    const foundPupil = pupils.find(pupil => pupil.id === id);
    if (!foundPupil) {
        throw new Error(`Pupil ${id} not found`);
    }
    // Using ´Object.assign()´ to update the pupil
    Object.assign(foundPupil, updates);
}

// Add new pupil function
// Here we have another problem, we need to add a new Pupil type, but we use a set number
// for the `id`, so we can't use the Pupil type, and we need to have 'pupilName' and 'grade'
// as the correct types, so we can't use the UpdatePupil type either.
// We need to make a new type for this case.
// We can't use the Partial here because then all is optional and we do need some info
// so we can use Omit type, it takes in a type AND a string (or a union of strings)
// Here we just use this type one time, so we can do it in the function. We use
// `Omit< the type we want to use, "the keys we want to omit">`
const addNewPupil = (newPupil: Omit<Pupil, "id">): Pupil => {
    // Create a new variable called pupil and add an `id` property to it
    // and spread in all the properties of the ´newPupil´ object.
    const pupil: Pupil = {id: nextPupilId++, ...newPupil};
    // Push the pupil to the pupils array
    pupils.push(pupil);
    return pupil;
}

updatePupil(1, {pupilName: 'Bo'});
updatePupil(2, {grade: 8});
updatePupil(4, {grade: 7});
// And now we ste sure that we get the value types for our updates

// Now we can sdd a new pupil
addNewPupil({pupilName: 'Anders', grade: 1})

console.log(pupils);


