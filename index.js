var express=require("express")
var app=express();
const bodyParser=require('body-parser');
const port=7000;
const cors=require('cors');
const mongoose=require('mongoose');
const config=require('./db.js');//
const emproute=require('./employee.route.js');
mongoose.Promise=global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(()=>{
    console.log('database is connected'+config.DB);
}).catch ( (err)=>{
    console.log('cannot connect to the database'+err);
});
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/emp',emproute);//
app.listen(port,function(){
    console.log('server is running on port'+port);

});
