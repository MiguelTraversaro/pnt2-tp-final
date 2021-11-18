const mongoose = require('mongoose');

const uri = process.env.MONGO_URI

const conexionDB = async () =>
{
try {

    const DB = await mongoose.connect(uri);
    console.log("Conexión satisfactoria", DB.connection.name)

} catch (error) {

console.log(error);

    }   
}

module.exports = conexionDB;



