const mongoose = require('mongoose');

const dbConnection = async(uri) => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('¡Conectado a la base de datos de Mongo!');

    } catch (error) {
        throw new Error('Error a la hora de conectarte a la base de datos de Mongo: ' + error);
    }
};

module.exports = {
    dbConnection
};