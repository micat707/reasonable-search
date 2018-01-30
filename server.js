//*******************************************//
//             科学搜(chao)索(xi)            //
//*******************************************//

// 模块引入
var express = require('express');
var request = require('request');

// 初始化express
var app = express();

// 路由
app.use('/', function(req, res) {
    var url = 'https://www.google.com' + req.url;
    req.pipe(request(url)).pipe(res);
});

// 端口及IP获取
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// 启动监听
app.listen(port, ip);

// 日志记录
console.log('Server running on http://%s:%s', ip, port);
