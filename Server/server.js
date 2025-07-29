
const express = require("express");
const bcryptjs = require("bcryptjs");
require("dotenv").config();
const mysql = require("mysql2");
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");


const authRoutes = require('./routes/authRoute');
const examsRoutes = require('./routes/examsRoute');


const app = express();
app.use(cors());//cross origin resource sharing
//باید باشد وگرنه بعضی مرورگر ها بلاک می کنند
app.use(express.json());
//نوع ورودی ها رو به جی سان تغییر می دهد
app.use('/api/auth', authRoutes);
app.use('/api/exams', examsRoutes);

PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
});
