const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  tema: { type: String, required: true },
  paginas: { type: String, required: true },
  tapa: { type: String, required: true },
  lenguaje: { type: String, required: true },
  idioma: { type: String, required: true },
  autor: { type: String, required: true },
  calificacion: { type: String, required: true } , 
  calificacion1: { type: String, required: true }  


  });



module.exports= mongoose.model('Cursos',UserSchema)
