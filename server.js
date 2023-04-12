const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConenction");
connectDB();

const PORT = 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log("hola");
})