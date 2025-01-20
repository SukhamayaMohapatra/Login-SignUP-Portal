const mongoose = require ('mongoose');
const connect = mongoose.connect("mongodb://127.0.0.1:27017/config");

connect.then(()=> {
    console.log("MongoDB connected ");
})
.catch(()=>{
    console.log("DB is not connected");
});

const LogInSchema = new mongoose.Schema({
        name : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        }
});
const collection = new mongoose.model ("config",LogInSchema);

module.exports = collection;