const mongoose = require('mongoose');
mongoose.connect('TU STRING DE CONEXION AQUI :D', {
    useNewUrlParser:true
});

const Note = mongoose.model('Note',{
    text:String,
    color:String
});

module.exports = Note;
