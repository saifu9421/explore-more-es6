// data access

const data   =  [{id:1,name:'saif',address: 'kochu khet'}];
console.log(data[0].address);

const products = {
      count : 5000,
      data :[
        {
            id: 1 , 
            name: "lenovo laptop",
            price: 65000,
        },
        {
           id:2 ,
           name: 'macbook',
           price:165000,
        },

      ]
};
// second products price 
console.log(products.data[1].price);

const user = {
     id: 50001,
     name:"saifur rahman saif",

     adderas: {
        street:{
          first :'54/1 uttor side',
          second:'poribag er goli',
          third:  'nodora',
        },
         city: "dhaka",
     },
};
console.log(user.adderas.street?.second);
console.log(user.adderas.street?.five);
