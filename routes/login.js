const express = require('express');
const app = express();
import jwt from 'jsonwebtoken';
const bcrypt= require('bcrypt');
const usuario=require('../models/usuarios');


app.post('/login',function(req,res){
    let body =res.body;

    usuario.findOne({email:body.email},(err,usuarioDB) => {

        if(err){
            return res.status(500).json({
                ok:false,
                err : erro,
            });
        }
        if (!usuarioDB){
            return res.status(400).json({
                ok:false,
                err: {
                    message: "usuario y contraseña incorrecto"
                }
            });
        }
        if (bcrypt.compareSync(body.password,usuarioDB.password)){
            return res.status(400).json({
                ok:false,
                err: {
                    message: "usuario y contraseña incorrecto"
                }
          

        });
            
        }
        // generar el token de autenticacion
        let token = jwt.sign({
            usuario: usuarioDB,

        }, process.env.SEED_AUTENTICACION, 
        {expiracion:process.env.CADUCIDAD_TOKEN }



        )
        res.json({
            ok:true,
            usuario:usuarioDB,
            token,

        })
        })

       
        });

        module.exports=app;

    



module.exports = app;
