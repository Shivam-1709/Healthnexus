const express = require('express');
const mongoose= require('mongoose');
const adminRoute = require('./Route/adminRoute');
const doctorRoute= require('./Route/doctorRoute');
const cors = require('cors');
const app= express();
const port=8000;

mongoose.connect('mongodb://127.0.0.1:27017/healthnexus')
.then(()=>console.log("Mongodb Connected Successfully 🎉"))
.catch((err)=>console.log(`Error 😢 : ${err}`));

app.use(express.json());
app.use(cors());
app.use('/api/admin',adminRoute);
app.use('/api/doctor',doctorRoute)

app.listen(port,()=>console.log(`Server Running on Port : ${port}🎉`));
