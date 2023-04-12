const mongoose = require("mongoose");

const connectDB = async ()=> {
    try {
        const connect = await mongoose.connect("mongodb+srv://granat365:Lictical-3645@cluster0.exuink8.mongodb.net/mycontacts_backend?retryWrites=true&w=majority");
        console.log("Database connected: ",
        connect.connection.host,
        connect.connection.name )

    }catch(err){
        console.log(err);
        process.exit(1);

    }


};
module.exports = connectDB;