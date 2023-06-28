require('dotenv').config()
const { MongoClient } = require('mongodb')

const user = process.env.USER
const password = process.env.PASS
const uri = `mongodb+srv://${user}:${password}@clusterfirstdb.gpfb4a7.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri)

async function run(){
    try {
        await client.connect()
        console.log('Conectamos ao MongoDB!')
    } catch (err) {
        console.log(err)
    }
}

run()

module.exports = client