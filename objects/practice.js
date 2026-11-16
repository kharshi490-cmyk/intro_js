// const person = {
//     name : "Ram",
//     age : 18,
//     city : "kadapa"
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// const person = {
//   name: "Asha",
//   age: 20,
// };
// person.age = 21;
// person.country = "India";
// console.log(person);

// const book = {
//   title: "The Hobbit",
//   pages: 310,
// };
// console.log(book.title);
// console.log(book["title"]);
// console.log(book.pages);
// console.log(book["pages"]);

// const person = {
//   name: "Asha",
//   age: 20,
// };
// const property = "age";
// console.log(person[property]);

// const person = {
//   name: "Asha",
// };
// person.age = 20;
// console.log(person.age);

// const person = {};
// person.name = "harshi";
// person.age = 18;
// person.city = "Kadapa";
// console.log(person);    

// const a = {
//   x: 10,
// };
// const b = a;
// b.x = 50;
// console.log(a.x);

// function showPerson(person) {
//     console.log(person.name);
//     console.log(person.age);
// }
// showPerson({
//   name: "Asha",
//   age: 20,
// });

// function makePoint () {
//     return {
//         x: 10,
//         y: 20
//     }
// }
// const point = makePoint();
// console.log(point);

// const person = {
//   name: "Asha",
//   age: 20,
// };
// function birthday(person) {
//   return person = {
//     name: person.name,
//     age: person.age + 1,
//   };
// }
// const olderPerson = birthday(person);
// console.log(person.age);
// console.log(olderPerson.age);

// const person = {
//   name: "Asha",
// };
// function test() {
//   const person = {
//     name: "Ravi",
//   };
//   console.log(person.name);
// }
// test();
// console.log(person.name);

// const countries = {
//     India: "Delhi",
//     Japan: "Tokyo",
//     China: "Beijing",
//     France: "Paris",
//     Paskistan: "Islamabad"
// }
// function capitalOf(country) {
//     return countries[country];
// }
// console.log(capitalOf("India"));

let a = {
  value: 10,
};
let b = a;

function change(x) {
  x.value = 20;
  x = {
    value: 30,
  };
  x.value = 40;
  return x;
}

const c = change(b);
console.log(a.value);
console.log(b.value);
console.log(c.value);