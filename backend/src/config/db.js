
const mongoose = require('mongoose');
// console.log("This is env",process.env);

async function main() {
    await mongoose.connect(process.env.DB_CONNECT_STRING)
}

module.exports = main;


