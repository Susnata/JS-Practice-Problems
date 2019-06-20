const inventors = [
  { first: 'Albert', last: 'Einstein', year: '1879', passed: '1955'},
  { first: 'Isaac', last: 'Newton', year: '1643', passed: '1727'},
  { first: 'Galileo', last: 'Galilei', year: '1564', passed: '1642'},
  { first: 'Marie', last: 'Curie', year: '1867', passed: '1934'},
  { first: 'Johannes', last: 'Keplar', year: '1571', passed: '1630'},
  { first: 'Nicolaus', last: 'Copernicus', year: '1473', passed: '1543'},
  { first: 'Max', last: 'Planck', year: '1858', passed: '1947'}
] ;

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hillaire', 'Bellow, Saul', 'Benchley, Robert', 'Bensen, Peter'];


//Array.prototype.filter()
//1. List inventors born in the 16th century

// const fifteen = inventors.filter(function(inventor){
//   if (inventor.year >=1500 && inventor.year < 1599){
//     return true;
//   }
// });

// const fifteen = inventors.filter(inventor => (inventor.year >=1500 && inventor.year < 1599));
// console.table(fifteen);

// //Array.prototupe.map()
// //2. List full names of the inventors

// const fullNames = inventors.map(inventor => (`${inventor.first} ${inventor.last}`));
// console.log(fullNames);

//Array.prototype.sort()
//3. List inventors in the increasing order of birth year.

// const ordered = inventors.sort(function(a,b){
//   if (a.year > b.year){
//     return 1 ;
//   }else{
//     return -1;
//   }
// });

// const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

// console.table(ordered);

//Array.prototype.reduce()
//4. How many years did all inventors live ?

// const totalYears = inventors.reduce((total, inventor) => {
//   return total + (inventor.passed - inventor.year) ;
// }, 0);

// console.log(totalYears);


//5. Sort the inventors by years lived.

//   const oldest = inventors.sort((a,b) => {
//     const lastGuy = a.passed - a.year;
//     const nextGuy = b.passed - b.year;
//     return lastGuy > nextGuy ? -1 : 1;
//   })

//   console.table(oldest); 

// //6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//               .map((link) => link.textContent)
//               .filter((streetName) => streetName.includes('de'));

//7. Sort Exercise
// Sort the people alphabetically by their last name

// const sortedLastName = people.sort((lastOne, nextOne) => {
//   const [aLast, aFirst] = lastOne.split(', ');
//   const [bLast, bFirst] = nextOne.split(', ');
//   return aLast > bLast ? 1 : -1;
//  })

//  console.table(sortedLastName);


//8. Reduce Exercise
// Sum of the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']; 

// const transportation = data.reduce((obj, item) => {
//   if (!obj[item]){
//     obj[item] = 0;
//   }
//   obj[item]++ ;
//   return obj;
// }, {}); 
// console.log(transportation);

// data.forEach((item) => console.log('**** ' + item + ' ****'));

// const healthyOption = data.includes('walk');
// console.log(healthyOption);

const num = [10, 12, 15, 19, 20, 23, 25, 26, 30];

// const subset = num.filter((item) => (item % 5) === 0);
// console.log(subset);

// const doubled = num.map((item) => item * 2);
// console.table(doubled);

// const remainder5 = num.reduce((total, item) => total + (item % 5), 0);
// console.log(remainder5);

// const multiple6 = num.some((item) => (item % 6) === 0);
// console.log(multiple6);

// const multiple7 = num.some((item) => (item % 7) === 0);
// console.log(multiple7);

// const isEvenNum = num.every((item) => (item % 2) === 0);
// console.log(isEvenNum);

// const  sorted = num.sort((a,b) => a > b ? -1 : 1);
// console.log(sorted);

// const name = "Susnata";
// const nameArr = Array.from(name);
// console.log(nameArr);

const arrAlpha = Array.of('a', 'v', 'd', 't', 's');
console.log(arrAlpha);