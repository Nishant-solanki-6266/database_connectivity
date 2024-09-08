var mongoose=require('mongoose');
const Schema=mongoose.Schema;
var Employee=new Schema({
ecode:{type:Number},
ename:{type:String},
esal:{type:Number},
desg:{type:String}},
{ collection:'employee'}
);
module.exports=mongoose.model('Employee',Employee);