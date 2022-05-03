// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "Max";

//   constructor() {
//     super();
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old."
//     );
//   }
// }

// const person = new Person();
// console.log(person);

// new Object()
const course = {
  title: "JS",
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  },
});

// student.name = "Max";

// Object.defineProperty(student, "progress", {
//   configurable: true,
//   enumerable: true,
//   value: 0.8,
//   writable: true,
// });

console.log(student);
course.printRating();
