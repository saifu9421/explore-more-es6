const products = [
    {id:1 , name:'lenovo',price:65000},
    {id:2 , name:'dell', price:45000},
    {id:3, name:'hp', price:40000},
    {id:4 , name:'mac', price:150000},
]; 


// Has  some properties  , method 

class product {
    country = `Bangladesh`;
   speak(talk){
    console.log(`toking about ${talk}`);
   }
}

class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); // Calls the parent class constructor
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name} is studying.`);
    }
  }
  
  const student1 = new Student('Bob', 18, 'A');
  student1.greet(); // Output: Hello, my name is Bob and I am 18 years old.
  student1.study(); // Output: Bob is studying.
  