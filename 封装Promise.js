//1.Promise 可以new，说明Promise是一个构造函数 / 类
//2.Promise 入参一个function，而且function是立马执行的
//3.Promise 有三种状态，分别是Pending  fulfilled  rejected
//4.Promise 有成功的回调函数(成功的值)和失败的回调函数(失败的值)
//5.Promise 有then

class MYPromise {
  //构造函数
  constructor(fn) {
    this.state = "pending"; //state就表示Promise的状态，promise的状态默认是进行中
    //存放then中的成功和失败的回调数组
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    //Promise成功的回调函数
    const onFulfilled = (msg) => {
      this.state = "fulfilled";
      this.onFulfilledCallbacks.forEach(success=>success(msg))
    };

    //Promise失败的回调函数
    const onRejected = (err) => {
      this.state = "rejected";
      this.onRejectedCallbacks.forEach(fail=>fail(err))
    };

    fn(onFulfilled, onRejected);
  }

  then(success, fail) {
    if(this.state == "pending"){
      this.onFulfilledCallbacks.push(success);
      this.onRejectedCallbacks.push(fail);
    }
  }
}

var p = new MYPromise(function (resolve, reject) {
  console.log("函数执行了");
  setTimeout(() => {
    // resolve("哈哈，成功了");
    reject("错了")
  }, 1000);
});

p.then(
  (msg) => {
    console.log("成功了", msg);
  },
  (err) => {
    console.log("失败了", err);
  }
);
