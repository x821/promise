const fs = require("fs");

/*
var promise = new Promise((resolve, reject) => {
  fs.readFile("./data/a.txt", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data.toString("utf-8"));
    }
  });
});

promise
  .then((msg) => {
    console.log("文件a", msg);
    return new Promise((resolve, reject) => {
      fs.readFile("./data/b.txt", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.toString("utf-8"));
        }
      });
    });
  })
  .then((msg) => {
    console.log("文件b", msg);
    return new Promise((resolve, reject) => {
      fs.readFile("./data/c.txt", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.toString("utf-8"));
        }
      });
    });
  })
  .then((msg) => {
    console.log("文件c", msg);
  });
*/

/*
//promise链：需要在then的函数中返回一个新的promise以维持promise链的继续
promise
.then(()=>{
  return new Promise()
})
.then(()=>{
  return new Promise()
})
.then(()=>{

})
*/


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


pReadFile("./data/a.txt")
.then((msg)=>{
  console.log("文件a", msg);
  return pReadFile("./data/b.txt")
})
.then((msg)=>{
  console.log("文件b", msg);
  return pReadFile("./data/c.txt")
})
.then((msg)=>{
  console.log("文件c", msg);
})
