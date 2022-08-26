const _ = require("lodash");
const numbers = [12, 2, 56, 47987, 456, 12, 4];
_.each(numbers, function (number) {
  console.log(number);
});
console.log(_.chunk(numbers, 3));
const person = {
  age: 30,
  color: "Black",
  education: {
    bacholer: "Engineer",
    masters: "IIT",
  },
};
console.log(_.get(person, "color"));
console.log(_.get(person, "education.masters"));
