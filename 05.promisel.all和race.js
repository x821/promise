//1.Promise.all   等所有的promise执行完了再执行then
var p1 = new Promise(function (resolve, reject) {
  setTimeout(function(){
      resolve("P1");
  },5000);
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(function(){
      resolve("P2");
  },2000);
});

//Promise.all会等所有的promise都执行完毕之后，一次性执行then
Promise.all([p1, p2]).then(function (results) {
  console.log(results); // 获得一个Array: ['P1', 'P2']
});


//2.Promise.race   有任何一个promise执行完了就执行then
Promise.race([p1, p2]).then(function (result) {
  console.log(result); // 'P2'
});