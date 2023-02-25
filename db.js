const { MongoClient } = require("mongodb")

let dbConnection
const connectToDb = (cb) => {
    MongoClient.connect('mongodb://localhost:27017/bookstore').then(client => {

 
        dbConnection = client.db()

        return cb()
    }).catch(err => {
        console.log(err);
        return cd(err)
    })
}

const getDb = () => {
    return dbConnection
}






module.exports = {
    connectToDb, getDb
}