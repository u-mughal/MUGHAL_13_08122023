const mongoose = require('mongoose')
const dotenv = require("dotenv").config({ encoding: "latin1" });
const databaseUrl = process.env.DATABASE_URL

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
