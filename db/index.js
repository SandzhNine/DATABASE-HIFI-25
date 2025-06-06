const mongoose = require('mongoose');
const { urlDb } = require('../config');  


const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {  
    return mongoose.connection;
  }
  return mongoose.connect(urlDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectDB;
