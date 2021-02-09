const mongoose = require("mongoose");

const maestroSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  nomina: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  alumnos: {
    alumno1:{
    type: String,
  },
  matricula1: {
    type: String,
  },
  alumno2:{
    type: String,
  },
  matricula2: {
    type: String,
  },
  alumno3:{
    type: String,
  },
  matricula3: {
    type: String,
  },
  alumno4:{
    type: String,
  },
  matricula4: {
    type: String,
  },
  alumno5:{
    type: String,
  },
  matricula5: {
    type: String,
  },
  alumno6:{
    type: String,
  },
  matricula6: {
    type: String,
  },
  alumno7:{
    type: String,
  },
  matricula7: {
    type: String,
  },
  alumno8:{
    type: String,
  },
  matricula8: {
    type: String,
  }
},
comentarios:{
  type:String
}
});

const maestroModel = mongoose.model("Maestros", maestroSchema);

const Maestros = {
    nuevoMaestro : function( newMaestro ){
        return maestroModel
        .create( newMaestro )
        .then( maestro => {
            return maestro;
        })
        .catch( err => {
            throw new Error( err.message );
        }); 
    },

    verMaestros : function() {
        return maestroModel
        .find()
        .then( todoslosmaestros => {
            return todoslosmaestros;
        })
        .catch( err => {
            return err;
        });
    },
}

module.exports = {
    Maestros, maestroModel
};