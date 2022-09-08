let obj = {
  Name: 'Tesla X',
  Color: 'Black',
  Model: 2021,
  Manufacturer: 'Tesla',
  Specifications: 'Auto Drive Feature',
  Wheels: 'Alloy',
};
console.log(obj);

let obj2 = {
  name: ['Uzair', 'Malik'],
  age: [19, 20],
};

console.log(obj2);

let obj3 = {};
obj3.name = 'Uzair;';
obj3.age = 18;
obj3.studies = 'Bachelor';
obj3.city = 'Karachi';
console.log(obj3);

let obj4 = {
  Name: 'BMW S8',
  Color: 'Red',
  Model: 2021,
  Manufacturer: 'BMW',
  Specifications: 'Auto Drive Feature',
  Wheels: 'Modify,Alloy',
};
for (let key in obj4) {
  console.log(
    'The following value of  ' + '' + key + ' ' + 'is' + ' ' + obj4[key]
  );
}

let obj5 = {
  Name: 'Tesla X',
  Color: 'Black',
  Model: 2021,
  Manufacturer: 'Tesla',
  Specifications: 'Auto Drive Feature',
  Wheels: 'Alloy',
};
console.log(obj5);

function Plan(name, price, timings, pages) {
  this.name = name;
  this.price = price;
  this.timings = timings;
  this.pages = pages;
}
let obj6 = new Plan('Basic', '20$', '6hours', '20');
let xyz = new Plan('Pro', '20$', '6hours', '20');

console.log('price' in obj6);

let myQuestions = [
  {
    question: 'What is Your Name?',
    answers: {
      a: 'Janab',
      b: 'Malik',
      c: 'Uzair',
    },
    correctAnswer: 'c',
  },
  {
    question: 'What is Your Age?',
    answers: {
      a: '19',
      b: '20',
      c: '21',
    },
    correctAnswer: 'b',
  },
];
console.log(myQuestions);
