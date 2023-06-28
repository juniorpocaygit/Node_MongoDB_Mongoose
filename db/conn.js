require('dotenv').config()
const mongoose = require('mongoose')

const user = process.env.USER
const password = process.env.PASS

async function main(){
    await mongoose.connect(`mongodb+srv://${user}:${password}@clusterfirstdb.gpfb4a7.mongodb.net/?retryWrites=true&w=majority`);

    console.log('Conectou ao banco com Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose