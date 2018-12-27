var express = require('express');
//引入自定义模块
var todoController = require('./controller/todeController');

var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(3000);

