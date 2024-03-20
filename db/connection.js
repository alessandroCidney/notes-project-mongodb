const { MongoClient } = require('mongodb')

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.qkc6zej.mongodb.net/Notes?retryWrites=true&w=majority&appName=Cluster0`

let _db

const initDb = callbackFn => {
  MongoClient.connect(url, { useUnifiedTopology: true })
    .then(client => {
      _db = client
      callbackFn(null, _db)
    })
    .catch(err => {
      callbackFn(err)
    })
}

const getDb = () => {
  return _db
}

module.exports = {
  initDb,
  getDb,
}