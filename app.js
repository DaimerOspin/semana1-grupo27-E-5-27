const express=require ('express');
const morgan=require('morgan');
const cors=require('cors');
const app=express();
const path=require('path');

// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import path from 'path';

// const app=express();

//coneccion a base de datos
const mongoose=require('mongoose');
const uri='mongodb://localhost:27017/clientes';
const options={useNewUrlParser: true, useUnifiedTopology: true};


mongoose.connect(uri,options).then(
    ()=>{console.log('conectado a DB')},
    err=> {console.log(err)}
);

//MIDEDLEWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

//  RUTA
app.use('/api', require('./routes/clientesruta'))

//MIDEDLEWARES para vue.js
const history=require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));

//  PUERTO

app.set('puerto', process.env.PORT||3000);
app.listen(app.get('puerto'),function(){
    console.log('example app listening on port'+app.get('puerto'));
});