const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const dbURL = "mongodb://localhost:27017/inotesDB";
const connectMongo = mongoose.connect( dbURL, {useNewUrlParser: true}).then(()=>{
    console.log("Mongo Connected");
}).catch(err=>{
    console.log("OH error");
    console.log(err);
});

module.exports = connectMongo;