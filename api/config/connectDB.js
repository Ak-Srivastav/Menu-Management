const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI | `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

    const conn = await mongoose.connect(url);
    console.log(
      `MongoDB connected: ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1); // exit the process with failure (1)
  }
};

module.exports = connectDB;
