    // start with strings, numbers and booleans
  let age = 100;
  let age2 = age;
  console.log(age, age2);
  age = 200;
  console.log(age, age2);
    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
const team = players;

console.log(players, team)
    // You might think we can just do something like this:
team[3] = 'Lux'
    // however what happens when we update that array?
console.log('the change applies to both arrays because it is a reference')
    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!


    // one way
const team2 = players.slice();
    // or create a new array and concat the old one in
const team3 = [].concat(players)
//console.log(team3)
    // or use the new ES6 Spread
const team4 = [...players]
team[3] = 'hello';
const team5 = Array.from(players)
console.log(team5)
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
const dinner = {
  app: 'cheesebread',
  salad: 'caesar'
}
    // and think we make a copy:
//const lunch = dinner;
//lunch.salad = 'fruit'
console.log(dinner)
//this is a reference, not a copy.

    // how do we take a copy instead?
const lunch2 = Object.assign({}, dinner, { salad: 'fruit' })
console.log(dinner, lunch2)
    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
console.log(JSON.parse(JSON.stringify(dinner)))