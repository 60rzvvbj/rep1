## Date对象  
#### 只能通过构造函数创建  
```js  
var date1 = new Date(); // 不传参数返回当前系统时间
var date2 = new Date('2020-10-11 8:8:8'); // 通过字符串创建
var date3 = new Date(2020, 9, 1); // 通过数字创建建
```
#### 获取某个值  
```js  
var date = new Date();
console.log(date.getFullYear()); // 获取当年
console.log(date.getMonth()); // 获取当月
console.log(date.getDate()); // 获取当天日期
console.log(date.getDay()); // 获取星期几
console.log(date.getHours()); // 获取小时
console.log(date.getMinutes()); // 获取分钟
console.log(date.getSeconds()); // 获取秒钟
```
#### 获取日期的总毫秒  
```js
var date = new Date(); // 获取当前系统时间

// 以下四种方法均可以得到当前系统时间的毫秒数
console.log(date.valueOf());
console.log(date.getTime());
console.log(+new Date());
console.log(Date.now());
```