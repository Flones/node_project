const mongoose = require('mongoose');
const dbco = require('../../env');
    console.log("yolo "+dbco.link);
    mongoose.connect(dbco.link, {
    //mongoose.connect('mongodb+srv://Stephane:root@cluster0.bdu8e.mongodb.net/Mydatabase?retryWrites=true&w=majority', { //serv chez Nelson
    //mongoose.connect('mongodb+srv://Flones:Br2NXMNmYJm4RA9X@cluster0.bdu8e.mongodb.net/MyDatabase?retryWrites=true&w=majority', { 
    //mongoose.connect('mongodb+srv://Flones:Br2NXMNmYJm4RA9X@cluster0.cdevd.mongodb.net/ChefClub?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('MongoDb is run');
})

module.exports = mongoose;