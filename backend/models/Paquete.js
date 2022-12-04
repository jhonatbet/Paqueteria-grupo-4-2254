const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let paqueteSchema = new Schema(
  {
    fecha: {
      type: Date,
      required: false,
    },
    hora: {
      type: Date,
      required: false,
    },
    cant: {
      type: Number,
      required: true,
    },
    alto: {
      type: Number,
      required: true,
    },
    ancho: {
      type: Number,
      required: true,
    },
    largo: {
      type: Number,
      required: true,
    },
    nombredes: {
      type: String,
      required: true,
    },
    cedula: {
      type: String,
      required: true,
    },
    dirrecogida: {
      type: String,
      required: true,
    },
    ciurecogida: {
      type: String,
      required: true,
    },
    direntrega: {
      type: String,
      required: true,
    },
    ciuentrega: {
      type: String,
      required: true,
    },
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model('Paquete', paqueteSchema)