const mongoose = require('mongoose');
const { urlDb } = require('../config');  // Pastikan ada config urlDb yang benar

// Fungsi koneksi singleton untuk reuse connection
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {  // 1 = connected
    return mongoose.connection;
  }
  return mongoose.connect(urlDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectDB;
