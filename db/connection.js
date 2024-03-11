const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017/notesDb'

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