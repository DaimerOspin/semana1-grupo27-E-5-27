const mongoose =require('mongoose');

var uniquevalidator =require('mongoose-unique-validator');

let rolesvalidos={
    values:["ADMIN","USER"],
    mensaje: '{value} no es un rol valido'

}

let Schema = mongoose.Schema;

let usuarioSchema= new Schema({

    nombre:{
        type: String,required: [true, 'El nombre es obligatorio']
   
    },

    email:{
        type: String,
        unique : true,
        required: [true,'El email es obligatorio']

    },
    password:{
        type: String,
        
        required: [true,'la contraseña es obligatoria']

    },
    rol:{
        type: String,
        default: "USER",
        required: [true],
        enum: rolesvalidos,


    }


});

//eliminar el key password
usuarioSchema.methods.toJSON = function(){
    let user =this;
    let userObject = user.userObject();
    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniquevalidator,{message:'{PATH} debe ser unico'});
module.exports= mongoose.model('usuarios',usuarioSchema);
