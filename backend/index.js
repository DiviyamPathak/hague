const express = require("express");
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/api/ex/",require('./apis/excRout.js'))

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