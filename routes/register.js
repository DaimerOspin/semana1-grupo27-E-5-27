const express = require('express');
const app = express();
const bcrypt= require('bcrypt');
const usuario=require('../models/usuarios');


app.post('/register',function(req,res){
    let body =res.body;

    let {nombre,email,password,raiz} =body;

    let usuario = new usuarios ({
        nombre,
        email,
        password: bcrypt.hashSync(password,10),
        rol,
    });

    usuario.save((err,usuarioDB)=> {
        if(err){
            return res.status(400).json({
                ok:false,
                err,


            });
        }

        res.json({
            ok:true,
            usuario: usuarioDB
        });
        })

});

module.exports = app;


