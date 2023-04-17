const app = require('./app');
const express = require('express')
const app = express()
// var mysql      = require('mysql');

app.listen(process.env.port, function check (error){
    if(error)
        console.log('error = '+ error);
    else
        console.log('started at ' ,`${process.env.port}`);
});
