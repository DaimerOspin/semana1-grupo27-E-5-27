import mongoose, { Schema } from "mongoose";
const schema=mongoose.Schema;

const clienteSchema=new Schema({
    nombre:{type:String,require:[true,'Nombre Obligatorio']},
    clienteId: String,
    FacturaId: String,
    estadoPedido: String,
    date:{type: Date, default:Date.now}
    


});

//convertir a modelo

const Cliente=mongoose.model('Cliente', clienteSchema);
export default Cliente;
