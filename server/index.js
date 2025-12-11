const express = require('express');
const dbConfig = require('./config/dbConfig');

const app = express();

app.listen(8082, ()=>{
    console.log('server started on 8082');
})