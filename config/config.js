require('dotenv').config()
const mongoose = require('mongoose');


const connectDB = () =>{
  mongoose.connect(process.env.MongoDB)
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err, 'database conection failed :('));
}

module.exports = {
  connectDB
};