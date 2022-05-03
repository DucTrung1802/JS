// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
//   return priceObj;
// });

// console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedPrices);

// const filteredArray = prices.filter((prices) => prices > 2);

// console.log(filteredArray);

// let sum = 0;
// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

// const sum = prices.reduce((prevValue, curValue) => {
//   prevValue + curValue;
// }, 0);

// console.log(sum);

// const data = "new york; 10.99; 2000";

// const transformedData = data.split(",");

// console.log(transformedData);

// const nameFragments = ["Max", "Trung"];
// const nameF = nameFragments.join(" ");
// console.log(nameF);

// const copiedNameFragments = [...nameFragments];
// console.log(copiedNameFragments);

// const persons = [
//   { name: "Max", age: 30 },
//   { name: "Manuel", age: 31 },
// ];

// const copiedPersons = [
//   ...persons.map((person) => ({ name: person.name, age: person.age })),
// ];
// persons.push({ name: "Anna", age: 20 });
// persons[0].age = 40;
// console.log(persons, copiedPersons);

// const person1 = { name: "Max" };
// const person2 = { name: "Manuel" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
// // console.log(personData.get(person1));
// personData.set(person2, [{ date: "one week ago", price: 20 }]);
// // console.log(personData.get(person2));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData)

// let person = { name: "Max" };
// const persons = new WeakSet();
// persons.add(person);
 
