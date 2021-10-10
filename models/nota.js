import mongoose, { Schema } from "mongoose";
const schema=mongoose.Schema;

const notaSchema=new Schema({
    nombre:{type:String,require:[true,'Nombre Obligatorio']},
    descripcion: String,
    usuarioId: String,
    date:{type: Date, default:Date.now},
    activo:{type:Boolean, default:true}


});

//convertir a modelo

const Nota=mongoose.model('Nota', notaSchema);
export default Nota;
