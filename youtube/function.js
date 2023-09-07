// function calculatecartprice(val1, val2, ...num1) {
//   return num1;
// }
// console.log(calculatecartprice(200, 400, 500, 1000, 2000));

// const user = {
//     username: "neeraj",
//     price: 199
// }

// function handelobject(anyobject){
// console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handelobject(user)

// handelobject({
//     username:"nn",
//     price:399
// })

// const mynewarray = [200, 300, 400]

// function returnsecondvalue(getarra){
//     return getarra[1]
// }
// console.log(returnsecondvalue(mynewarray));/

// scope

// {} -- is scope in the case of function and if and else
// let a = 200;
// if (true) {
//   let a = 10;
//   const b = 15;
// //   console.log("INEER: ", a);
// }

// console.log(a);

// function one(){
//     const usrername = "Neeraj"

//     function two(){
//         const website = "youtube"
//         console.log(usrername);
//     }
//     // console.log(website);

//     two()
// }
// one()

// if (true) {
//   const username = "neeraj"
//   if (username === "neeraj") {
//     const website = " youtube";
//     console.log(username + website);
//   }
//   console.log(website);
// }

// console.log(username);
// console.log(addone(5));
// function addone(num){
//     return num + 1
// }

// const addTwo = function(num){
//     return num + 2
// }
// addTwo(5)

// ++++++++++ARROW FUNCTION++++++++

// const user = {
//   username: "Neeraj",
//   price: 299,

//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome to website`);
//     console.log(this);
//   },
// };

// user.welcomeMessage()
// user.username = "raj"
// user.welcomeMessage()
// console.log(this);

// function name(){
//     console.log(this);
// }

// const name = () => {
//     let username = "Neeraj"
//     console.log(this);
// }
// name()

// const addtwo = (num1, num2) => num1 + num2;
// console.log(addtwo(3, 4));

(function name() {
  console.log(`MY NAME IS NEERAJ`);
})();

((name) => {
    console.log(`hello Thhis is ${name}`);
})("neeraj")
