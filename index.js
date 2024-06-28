// Write your solution here!
// Initial cats array
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the array destructively
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat to the beginning of the array destructively
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat from the array destructively
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat from the array destructively
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to the array and return a new array without modifying the original
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat to the array and return a new array without modifying the original
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat from the array and return a new array without modifying the original
function removeLastCat() {
  return cats.slice(0, -1);
}

// Function to remove the first cat from the array and return a new array without modifying the original
function removeFirstCat() {
  return cats.slice(1);
}
