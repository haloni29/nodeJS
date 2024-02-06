require('dotenv').config()
const express = require('express');
const app =  express();
const port = process.env.PORT;
const router = require('./routes/routes');
const { connectDB } = require('./config/config');
const { default: mongoose } = require('mongoose');
const { usuariosSchema } = require('./models/model');


app.use(express.json());
app.use('/', router);


app.listen(port, ()=>{
    console.log(`listen server port ${port}`);
});
connectDB();
const usuario =  mongoose.model('usuario', usuariosSchema);