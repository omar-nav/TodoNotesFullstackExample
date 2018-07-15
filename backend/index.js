const Note  = require('./models');
const app = require('express')();
const bodyParser = require('body-parser');

// Se establece que el puerto estará el el puerto 3000, en caso de que no exista la variable de entorno PORT
let port = process.env.PORT || 3000; 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.post('/notes', (req, res) => {

    let { text, color } = req.body;
    let newNote = new Note({text, color});

    newNote.save().then(() => res.send(newNote));

});

app.get('/notes', (req, res) => {

    Note.find({}, (err, noteslist) => res.send(noteslist));

});

app.delete('/notes', (req, res)=>{

    let id = req.body.id;

    Note.findByIdAndRemove(id, (err, deletedNote) => res.send(deletedNote));

});

app.listen(port, () => console.log("Ya me siento de universidad :)"));