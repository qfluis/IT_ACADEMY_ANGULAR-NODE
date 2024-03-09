const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        // CREO QUE YA NO ES NECESARIO
        /*await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAnModify: false
        });*/

        console.log('BD online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la BD');
    }



}







module.exports = {
    dbConnection
}