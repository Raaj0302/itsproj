const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Toll=require('./db/model/tollschema');
// const Number=require('./db/model/numberplateschema');
require('./db/conn');
require('./router/auth')
app.use(express.json());

app.listen(3000,()=>{
    console.log('listening on port 3000');
});
