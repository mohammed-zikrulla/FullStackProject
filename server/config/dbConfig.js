const mongoose = require("mongoose");

const dbString =
  "mongodb+srv://zikrulla16:lZDLZfGOChpHmEkf@cluster0.hbqzke7.mongodb.net/BMS?appName=Cluster0";

mongoose.connect(dbString);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("db connected successfully");
});
connection.on("error", () => {
  console.log("failed to make the connection");
});

// alternative method
// mongoose.connect(dbString).then(()=>{
//     console.log('Connection Successful');
// }).catch(()=>{
//     console.log('connection unsuccessful')
// })
