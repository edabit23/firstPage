



//   let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };

//   for (let code in codes) {
//     console.log(code);
//   }


let user = {
    name: "John",
    age: 30,
    sayHi() {
      // "this" is the "current object"
      console.log(this.name);
      console.log(user.name);
    }
  
  };
  user.sayHi(); // John

console.log('hey guys');