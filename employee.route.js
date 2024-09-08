var MongoClient = require('mongodb').MongoClient;
var URL = "mongodb://127.0.0.1:27017/meradb";//
const express = require('express');
const { get } = require('http');
const employeeRoute = express.Router();
const Employee = require('./employee.model');//
// employeeRoute.route('/empsave').get(function(req,res){
//     var e={ecode:1,
//         ename:"baba",
//     esal:45000,
//     desg:"raone"}


                  /*isme url se data put kiya or google pr show hua or mongodb me bhi */


employeeRoute.route('/empsave/:ecode/:ename/:esal/:desg').get(function(req,res){
    var e={
        ecode:req.params.ecode,
        ename:req.params.ename,
        esal:req.params.esal,
        desg:req.params.desg
    }
let emp=new Employee(e);
emp.save().then(emp=>{
    res.status(200).json({'emp':'employee added successfully'+emp});
})
.catch(err=>{
    res.status(400).send("unable to save to database");
});
});
// });


/*ab hmne direct data google pr ak page bnakar direct sare show krva liye  */

employeeRoute.route('/getemp').get(async (req, res) => {
    const allemp = await Employee.find();
    res.status(200).send({
        status: 'success',
        data: allemp,
    })
});

             /*ab hm google pr id dalkar search krege */
             employeeRoute.route('/searchemp/:id').get(async (req, res) => {
                const allemp = await Employee.findOne({ecode:req.params.id});
                res.status(200).send({
                    status: 'success',
                    data: allemp,
                })
            });







employeeRoute.route('/').get(function (req, res) {
    Employee.find(function (err, employee) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(employee);
        }
    });
});
module.exports = employeeRoute;

