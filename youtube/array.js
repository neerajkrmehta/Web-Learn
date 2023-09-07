// const myArray = [1,2,9,4,5,6]

// const arrayExample = ['Mahadev','Bholenath']

// const myarrayex = new Array(1,6,87,8)

// console.log(myArray[5]);
// console.log(arrayExample[0]);
// console.log(myarrayex[2]);


// array methods

// myArray.push(4)

// console.log(myArray);
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)

// myArray.shift()

// console.log(myArray.includes(1));
// console.log(myArray.includes(11));

// console.log(myArray.indexOf(9));


// const newArray = myArray.join()

// console.log(newArray);

//  console.log("A", myArray);
//  console.log(myArray.slice(1,3));

// console.log("B",myArray);
// console.log(myArray.splice(1,3));
   
 
const myArray = [1,2,9,4,5,6]

const arrayExample = ['Mahadev','Bholenath']

// myArray.push(arrayExample)
// console.log(myArray);

// console.log(myArray[6],[5]);

//  const allmyArray = myArray.concat(arrayExample)
//  console.log(allmyArray);

  const newArray = [...myArray,...arrayExample]
  // console.log(newArray);

//    const multipalArray = [1,2, [3,Neeraj,0], [fuh,hdjh,dhdd],985,949,hf]

//    const realmultipalarray = multipalArray.flat(Infinity)

//    console.log(realmultipalarray);

// console.log(Array.isArray['neeraj']);
// console.log(Array.from("Hitesh"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));