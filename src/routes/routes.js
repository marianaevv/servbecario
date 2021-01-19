const express = require("express");
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const { maestroModel, Maestros } = require( '../models/maestroModel' );
const cors = require('../middlewares/cors');
const jsonParser = bodyParser.json();
router.use( jsonParser );

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
router.get('/Maestros', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
router.get("/api/hello", (req, res) => {
  res.status(200).send("Hello World!");
});

router.get("/api/maestros", async (req, res) => {
  await maestro.getAllMaestros(req, res);
});
router.post('/api/newMaestro', ( req, res ) => {
    /*let nombre = req.body.nombre;
    let nomina = req.body.nomina;
    let correo = req.body.correo;
    let alumno1 = req.body.alumno1;
    let matricula1 = req.body.matricula1;
    let alumno2 = req.body.alumno2;
    let matricula2 = req.body.matricula2;
    let alumno3 = req.body.alumno3;
    let matricula3 = req.body.matricula3;
    let alumno4 = req.body.alumno4;
    let matricula4 = req.body.matricula4;
    let alumno5 = req.body.alumno5;
    let matricula5 = req.body.matricula5;
    let alumno6 = req.body.alumno6;
    let matricula6 = req.body.matricula6;
    let alumno7 = req.body.alumno7;
    let matricula7 = req.body.matricula7;
    let alumno8 = req.body.alumno8;
    let matricula8 = req.body.matricula8;*/
    const maestro = new maestroModel();
    maestro.nombre = req.body.nombre;
    maestro.nomina = req.body.nomina;
    maestro.correo = req.body.correo;
    maestro.alumnos.alumno1 = req.body.alumno1;
    maestro.alumnos.matricula1 = req.body.matricula1;
    maestro.alumnos.alumno2 = req.body.alumno2;
    maestro.alumnos.matricula2 = req.body.matricula2;
    maestro.alumnos.alumno3 = req.body.alumno3;
    maestro.alumnos.matricula3 = req.body.matricula3;
    maestro.alumnos.alumno4 = req.body.alumno4;
    maestro.alumnos.matricula4 = req.body.matricula4;
    maestro.alumnos.alumno5 = req.body.alumno5;
    maestro.alumnos.matricula5 = req.body.matricula5;
    maestro.alumnos.alumno6 = req.body.alumno6;
    maestro.alumnos.matricula6 = req.body.matricula6;
    maestro.alumnos.alumno7 = req.body.alumno7;
    maestro.alumnos.matricula7 = req.body.matricula7;
    maestro.alumnos.alumno8 = req.body.alumno8;
    maestro.alumnos.matricula8 = req.body.matricula8;
    maestro.comentarios = req.body.comentarios;
    try {
         maestro.save();
        return res.status(201).send(maestro);
      } catch (err) {
        return res.status(500).send(err);
      }
  /*  if(!nombre || !nomina || !correo ){
        res.statusMessage = "Please send all the fields required";
        return res.status( 406 ).end()
    }

    const newMaestro = { nombre, nomina, correo, alumno1, matricula1
        , alumno2, matricula2, alumno3, matricula3, alumno4, matricula4
        , alumno5, matricula5, alumno6, matricula6, alumno7, matricula7
        , alumno8, matricula8 }
    

    Maestros.nuevoMaestro( newMaestro )
    .then( results => {
        return res.status( 201 ).json( results );
    })
    .catch( err => {
        res.statusMessage =  "Somethong went wrong with the DB";
        return res.status( 500 ).end();
    });*/
})

/*router.post("/api/newMaestro", async (req, res) => {
  await maestro.nuevoMaestro(req, res);
});*/
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('/build'));
}
//La ruta no existe
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


module.exports = router;