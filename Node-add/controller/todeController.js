var mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://todoapp:mitu520@ds115963.mlab.com:15963/zhangdazhu')

// 创表
var todoSchema = new mongoose.Schema({
     item:String
})
// 往数据库存储
var Todo = mongoose.model('Todo',todoSchema);

// Todo({item:'你好'}).save(function(err,data){
//     if(err) throw err;
//     console.log(data)
// })

var bodyParser = require('body-parser');

//对数据解析
var urlencodeParser = bodyParser.urlencoded({extended:false})

// var data = [
//     {item:'欢迎大家来到课堂'},
//     {item:'欢迎大家来到...'},
//     {item:'欢迎大家来到111'},
// ]

module.exports = function(app){
    // 获取数据
    app.get('/todo',function (req,res) {
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render('todo',{todos:data});
        })
    })

    // 传递数据
    app.post('/todo',urlencodeParser,function(req,res){
       Todo(req.body).save(function(err,data){
           if(err) throw err;
           res.json(data);
       })
    })

    // 删除数据
    app.delete('/todo/:item',function (req,res) {
        Todo.find({item:req.params.item}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        })
        // data = data.filter(function (it) {
        //     return req.params.item !== it.item
        // })
        // res.json(data);
    })
}
