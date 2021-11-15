const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('¡Conectado a la base de datos de Mongo!');

    } catch (error) {
        throw new Error('Error a la hora de conectarte a la base de datos de Mongo.');
    }
};

module.exports = {
    dbConnection
};