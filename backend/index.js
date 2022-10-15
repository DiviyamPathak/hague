const express = require("express");
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/apis/ex/",require('./apis/excRout.js'));
app.use('/apis/users/',require('./apis/UserRoutes'));

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGOURI)
  
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }
  connectDB();

app.listen(3000,()=> console.log('server running'))