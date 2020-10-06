// var reg = /.*[a-zA-Z]+.*/; // 判断是否存在字母
// var reg = /.*[0-9]+.*/; // 判断是否存在数字
var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // 验证邮箱
// console.log(reg.test('1729841ash43189'));
// console.log(reg.test('1284751274'));
// console.log(reg.test('akjasfafkajs'));
console.log(reg.test('1808078515@qq.com'));
console.log(reg.test('asjhfdakj123'));
console.log(reg.test('18080785asdasd@asd.cn'));