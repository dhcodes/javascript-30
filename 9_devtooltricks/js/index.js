'use strict';

var dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  var p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

var consoleStr = "meow";
// Regular
console.log('hello');

// Interpolated
console.log('I am an array ' + consoleStr);

// Styled
console.log('%c I am some text', 'font-size: 25px');

// warning!
console.warn('Warning, warning!');

// Error :|
console.error('Oh noes!');

// Info
console.info('You should pay attention!');

// Testing
var para = document.querySelector('p');
console.assert(para.classList.contains('randomClass'), 'does not have class: randomClass');

// clearing
//console.clear();

// Viewing DOM Elements
console.log(para);
console.dir(para);

// Grouping together
dogs.forEach(function (dog) {
  console.groupCollapsed('' + dog.name);
  console.log('Say hello to ' + dog.name);
  console.log('He is ' + dog.age);
  console.groupEnd('' + dog.name);
});

// counting
console.count('hello');
console.count('para');

// timing
console.time('get data');
fetch('https://api.github.com/users/wesbos').then(function (data) {
  return data.json();
}).then(function (data) {
  console.log(data);
  console.timeEnd('get data');
});

//table
console.table(dogs);