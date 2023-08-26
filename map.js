const numbers = [2,3,4,5,6,7,8,9,10];
 
//  regular function 
// function doubleIt(num){
//     console.log(num);
//     return num*2;
// };
// arrow function
// const doubleIt  =(num) =>  num*2;
// const result  =  numbers.map(doubleIt);
// console.log(result);

const output2  =  numbers.map(num => num*2);
console.log(output2);

// const doubled = [];

// for(const num  of numbers){
//     const double = num *2;
//     doubled.push(double);
// };
// console.log(doubled);
