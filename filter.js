// filet selects element  based on a condition and returnd an array 
//  with element that fulfilled the condition
const number = [1,2,5,6,7,15];

 const evenNumber =  number.filter(num => num >=  5);
 console.log(evenNumber);



 const numbers = [75,65,67,72,55,59,4];
 const selected =  numbers.filter(num =>  num %2 !== 0);
 console.log(selected);
const friends = ['saif','tom','john','oliver'];
const odd1 =  friends.filter(n =>  n.length %2 !== 0);
console.log(odd1)
 
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// // Filter out even numbers
// const oddNumbers = numbers.filter(function(number) {
//   return number % 2 !== 0;
// });

// console.log(oddNumbers);