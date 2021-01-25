var express=require('express');
var mysql=require('mysql');
var app=express();

var connection =mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'per'
});

connection.connect(function(error){
if(!!error){
    console.log("Error");
}else{
    console.log("connected");
}
});
app.get('/',function(req,resp){
connection.query("select * from users",function(error,rows,fields){
    if(!!error){
        console.log('error in the query');
    }else{
        console.log('successful \n');
        console.log(rows);
    }
}
);
})
app.listen(1337);