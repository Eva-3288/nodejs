const {add,mul} = require('./add');   // 引入自己写的js文件
const _ = require('lodash');   //引入第三方的包lodash

const sum = add (1,5);
const result = mul(2,4);

const arr = _.concat([1,2],3);   // 使用lodash中的方法

console.log(sum, result, arr);

