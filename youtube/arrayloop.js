// const arr = [1,2,3,4,5,6,7]

// for (const number of arr) {
//     console.log(number);
// }

// const greeting = "hello world!"
// for (const greet of greeting) {
//     console.log(greet);
// }

// const map = new Map()
// map.set('IN',"India")
// map.set('usa', "united states of America")
// map.set('fr', "france")
// map.set('IN',"India")

// for (const key in map) {
//    console.log(key);
// }


// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, '-', value);
// }

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     js: 'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programingLan = ['js', 'c++', 'html', 'css', 'paytn']
// for (const key in programingLan) {
//     console.log(programingLan[key]);
    
// }

// const codeing = ['js', 'css', 'this', 'c++']

// codeing.forEach( function (item) {
//        console.log(item);
// } )

// codeing.forEach( (item) => {
//  console.log(item);
// })

const myCoding = [
   { languageName: "javascript",
     languageFileName: "js"
} ,
   { languageName: "java",
    languageFileName: "js"
} ,
   { languageName: "script",
    languageFileName: "js"
}
]

myCoding.forEach ( (item) => {
    console.log(item.languageName);
} )