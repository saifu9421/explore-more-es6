// 1. var let const 
// let const 
// default parameter 
//  template string :``
// arrow function .
// destructuring and  spread operator
// for in loop used in object
// for of loop used in array and string 

const a  =  56;
const numbers =  [56,7,8];
const parson = {
    name:'saif',
};
// template string : ``;
const message =  `hi,${parson.name} has a ${a} access to ${numbers [2]}`;
console.log(message);

const square =  (x) => Math.pow(x,2);
const y  =  square(3);
console.log(y);

const sum =  (a , b) => a +  b;
const add =  sum(10 , 10);
console.log(add);

// destructuring 
const {age,z,...others} =  {x:2,y:5,z:3,name:"saifur rahman saif", age:55,};
   console.log(age);
   console.log(z);
   console.log(others);
const [first ,  second ,...remaining ] = ['ram','sam','modo','jodu'];

const student ={
    name: "saifur rahman saif",
    age : 19,
    id: 101,
    adderas : "comilla",
};

const { adderas, id} = student;
console.log(id);
console.log(student);

const x  = Object.keys(student);
console.log(...x);
for(const arry of x){
    console.log(arry);
};