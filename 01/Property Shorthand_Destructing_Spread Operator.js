/*
Object Tricks: Property Shorthand, Destructing, Spread Operator
*/

// Object property shorthand
// const name = 'Reed';
// const user = {
//   name,
// };
// console.log(user.name); // Reed

// Object destructuring
// It allow us to extract properties as individual variales of the same name from a given object
// const user = {
//   name: 'Reed',
//   age: 28,
//   isEnglishSpeaker: true,
// };

// // Dot property acces
// const name = user.name;
// const age = user.age;
// console.log(name, age); // Reed 28

// // Object destructing
// // Note: Use ':' to rename a value as you destructure it.
// const { name, age, isEnglishSpeaker: knowEnglish } = user;
// console.log(name, age, knowEnglish); // Reed 28 true

// Object spread operator
// Create obejcts from existing ones
const info = {
  name: 'Reed',
  age: 28,
};

const bio = {
  job: 'JavaScript Developer',
};

const user = {
  ...info,
  hometown: 'San Diego',
  ...bio,
};

// console.log(user);
// Object.getOwnPropertyNames(user).forEach((prop) => {
//   console.log(`${prop} : ${user[prop]}`);
// });
/*
name : Reed
age : 28
hometown : San Diego
job : JavaScript Developer
*/

// Note that properties that come later with the same name will overwrite previous properties
const user2 = {
  ...info,
  ...bio,
  hometown: 'San Diego',
  age: 100,
};

Object.getOwnPropertyNames(user2).forEach((prop) => {
  console.log(`${prop} : ${user2[prop]}`);
});
/*
name : Reed
age : 100
job : JavaScript Developer
hometown : San Diego
*/
