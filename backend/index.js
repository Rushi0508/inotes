const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const dbURL = "mongodb://localhost:27017/inotesDB";
const connectMongo = mongoose.connect( dbURL, {useNewUrlParser: true}).then(()=>{
    console.log("Mongo Connected");
}).catch(err=>{
    console.log("OH error");
    console.log(err);
});

const app = express();
const port = 3000;

const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/notes");

app.use("/api/auth", authRoutes);
app.use("api/notes", notesRoutes);

app.listen(port, ()=>{
    console.log("Connected to 3000");
})