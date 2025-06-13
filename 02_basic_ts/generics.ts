/*
*  Generics
*/

const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = [
    "raindrops on roses",
    "whiskers on kittens",
    "bright copper kettles",
    "warm woolen mittens",
];
const voters =[{name: 'Alice', age: 42}, {name: 'Bob', age: 77}];

// We cant just use the any type for this, because typescript will loose all meaning,
// here we can use a generic type
function getLastItem<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));

