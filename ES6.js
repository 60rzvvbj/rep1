// ——————————————————箭头函数————————————————————
//#region

// 箭头函数用来简化函数定义语法的

// const fn = () => {
//     console.log(123);
// };

// fn();

// 函数体中只有一句代码，且代码的结果是返回值，则可以省略大括号

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// 如果形参只有一个，则可以省略形参外侧的小括号

// const doubling = x => 2 * x;
// console.log(doubling(10));

// 箭头函数不绑定this关键字，箭头函数中的this，指向的是函数定义位置的this

// const obj = { name: '张三' };
// function fn() {
//     console.log(this);
//     return () => {
//         console.log(this);
//     }
// }
// const resFn = fn.call(obj);
// resFn();

// 箭头函数不能使用arguments属性

// const fun = function () {
//     console.log(arguments);
// }

// const fn = () => {
//     console.log(arguments);
// }

//#endregion


// const sum = (...args) => {
//     let res = 0;
//     for (let i = 0; i < args.length; i++) {
//         res += args[i];
//     }
//     return res;
// }
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// arr.push(...arr2);
// console.log(sum(...arr));


// ————————————伪数组转化成真正的数组———————————————
//#region 

// let li = document.querySelectorAll('li');
// let liarr = [...li];
// console.log(li);
// console.log(liarr);

//#endregion

// —————————Array中的find和findIndex函数———————————
//#region 

// let arr = [{
//     id: 1,
//     name: 'zs'
// }, {
//     id: 2,
//     name: 'ls'
// }, {
//     id: 3,
//     name: 'ww'
// }, {
//     id: 4,
//     name: 'm6'
// }];
// let t = arr.find(value => value.id == 3);
// console.log(t);
// t = arr.findIndex(value => value.id == 3);
// console.log(t);

//#endregion

// —————————————Array中的includes函数——————————————
//#region 

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(3));
// console.log(arr.includes(6));
// console.log(arr.indexOf(3));
// console.log(arr.indexOf(6));

//#endregion

// ——————————————————模板字符串————————————————————
//#region 

// let zs = `张三`; // 要用反引号Tab键上方的那个
// let res = `ws${zs}`; // 可用${}
// console.log(res);

// let jg = `
//     <div>
//         <span>1</span>
//         <span>2</span>
//         <span>3</span>
//     </div>
// `; // 字符串中可换行
// console.log(jg);

// function fn() {
//     return 123;
// }
// let hs = `function return ${fn()}`;
// console.log(hs);

//#endregion