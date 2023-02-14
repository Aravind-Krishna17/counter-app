const express= require("express");
const app=express();
const mysql = require('mysql');

const db= mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'password',
    database:'counter'
})

app.post('/create', (req,res) => {
    const username=req.body.username
    const count=req.body.count

})

db.query(
    'INSERT COUNT_TABLE VALUES (?,?)',
    [username,count],(err,result)=>{
        if(err){
            console.log("err");
        }
        else{
            res.send("values inserted");
        }
})

app.listen(3001, () => {
    console.log("yes");
})