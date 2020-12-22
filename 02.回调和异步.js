//引入fs模块
const fs = require("fs");

//a文件读完之后读b，b读完之后读c

//fs.readFile 是node中的一个读文件的方法，该方法有两个参数
//1.文件的路径
//2.回调函数，当文件读取完毕之后执行该回调函数  函调函数的参数err表示读文件过程中有没有错，data读文件的结果
fs.readFile("./data/a.txt", (err, data) => {
  console.log(err, data.toString("utf-8"));

  fs.readFile("./data/b.txt", (err, data) => {
    console.log(err, data.toString("utf-8"));

    fs.readFile("./data/c.txt", (err, data) => {
      console.log(err, data.toString("utf-8"));
    });
  });
});

//js中解决异步问的方案:
//1.通过回调函数来解决   回调地狱
//2.通过Promise来解决   承诺
//3.使用async和await来解决   终极方案
