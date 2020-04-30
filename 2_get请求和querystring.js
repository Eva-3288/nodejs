const http = require('http');
const querystring = require('querystring');   //nodejs的模块,我们利用这个模块querystring的parse方法，把url里？后的字符串 转为对象

const server = http.createServer((req,res)=>{
    console.log(req.method);   //GET
    const url = req.url;    //请求的完整的url
    req.query = querystring.parse(url.split('?')[1]); //解析url:  http://localhost:8000/?a=10&b=2 querystring里的字符串a=10&b=2为对象{a:10,b:2}，然后赋值给req.query,这里是赋值，开始req是没有query这个字段的
    res.end(JSON.stringify(req.query));  //将querystring 由对象转为字符串返回
})

server.listen(8000);