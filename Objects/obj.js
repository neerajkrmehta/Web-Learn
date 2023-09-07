//  function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
//  }

//  const circle1 = createCircle(1);
//  console.log(circle1);

//  const circle2 = createCircle(100);
//  console.log(circle2);

// constructor function

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const another = new circle(1);

// const circle = {
//     radius:1

// };
//  circle.color = 'yellow';
//  circle.draw = function(){}

// delete circle.color;
// delete circle.draw

//  console.log(circle);
// let x = 10;
// let y = x;

// x = 20;

let address = {
    street:'a',
    city :'b',
    zipCode:'c'
};
function showAddress(address){
    for(let key in address)
      console.log(key,address[key]);
}

showAddress(address);