const fs = require('fs')

//创建一个promise对象
//1.Promise所入参的function是立马执行的
//2.Promise本身不是异步的，只不过Promise中可以有异步任务
//3.Promise是一个承诺，里面存放了未来某个事件(异步任务)的结果
//4.Promise入参函数中的两个参数的含义:
  //4.1 resolve 会修改Promise的状态为Fulfilled，状态一旦修改之后，promise.then的第一个函数就执行了
  //4.2 reject  会修改Promise的状态为Rejected，状态一旦修改之后，promise.then的第二个函数就执行了
  //4.3 Promise有三种状态，分别是Pending(进行中) Fulfilled(成功) Rejected(失败)
//5.一旦promise有结果之后，我们可以通过resolve和reject返回promise的执行结果。一旦resolve和reject之后，promise.then()就会执行了
//6.promise.then()函数有两个参数，第一个参数是promise成功的回调，第二个参数是promise失败的回调

console.log("1")
var promise = new Promise((resolve,reject)=>{
  console.log("2")
  //fs.readFile是一个异步任务
  fs.readFile('./data/a.txt',(err,data)=>{
    if(err){
      reject(err)
    }else{
      resolve(data.toString("utf-8"))
    }
  })
})

promise.then((msg)=>{
  console.log("promise成功了",msg)
},(err)=>{
  console.log("promise失败了",err)
});
console.log("3")