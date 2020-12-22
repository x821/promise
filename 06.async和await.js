const fs = require('fs');

function pReadFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString("utf-8"));
      }
    });
  });
}

//需求：a读完读b，b读完读c

//加async修饰的函数有两个特点：
//1.只有在async修饰的函数中才可以使用await
//2.async修饰的函数会默认返回一个Promise
//3.加async修饰的函数是一个异步函数

//await的特点
//1.只有在async修饰的函数中才可以使用await
//2.await后面需要跟一个promise
//3.await和async结合起来使用，现在await表示会等promise执行完毕才会执行下一步
console.log("111")

//async和await是es7的语法
async function read(){
  console.log("222")
  const result1 = await pReadFile("./data/a.txt")
  console.log("333")
  const result2 = await pReadFile("./data/b.txt")
  console.log(result2)
  const result3 = await pReadFile("./data/c.txt")
  console.log(result3)
  console.log("444")
}

read().then(()=>{
  console.lcccccccccog("888")
})

console.log("555")