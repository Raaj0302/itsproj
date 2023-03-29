const mongoose = require('mongoose');
const DB = 'mongodb+srv://raj0302:9726809906Raj@cluster0.mn8uyal.mongodb.net/itsproject?retryWrites=true&w=majority';
// middeware

mongoose.connect(DB,{useNewUrlParser: true,

useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successful") ;
}).catch((err)=>{console.log(err)});
