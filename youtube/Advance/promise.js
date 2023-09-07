const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
   
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("Async task 2");
    resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
     resolve({userName: "chai", email: "example@email.com"})
    }, 1000)
    
    })
    promiseThree.then(function(user){
      console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
       let error = true 
       if (!error) {
        resolve({username: "Neeraj", Password:"1234562@"})
       } else{
        reject('errpr: somthing went wrong')
       }
    }, 1000)
})

promiseFour
.then((user) => {
  console.log(user);
  return user.username
})
.then((username) => {
console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or reject"))


const promiseFive = new Promise(function(resolve,reject){
     setTimeout(function () {
       let error = true;
       if (!error) {
         resolve({ username: "JavaScript", Password: "1234562@" });
       } else {
         reject("errpr: JS went wrong");
       }
     }, 1000);
});

async function consumepromiseFive(){
  try {
     const response = await promiseFive;
     console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumepromiseFive()

async