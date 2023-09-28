const mongoose = require('mongoose')
const databaseUrl =
  // Modification de localhost en 127.0.0.1:27017 à cause de l'IPV6
  process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
