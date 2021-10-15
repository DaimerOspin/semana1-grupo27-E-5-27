const express=require ('express');
const morgan=require('morgan');
const cors=require('cors');
const app=express();
const path=require('path');
const bodyParser = require('body-parser');

// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import path from 'path';

// const app=express();

//coneccion a base de datos
const mongoose=require('mongoose');
//const uri='mongodb://localhost:27017/clientes';
const user='daimerospina';
const password='dmospinac';
const dataB='cliente';
const uri= `mongodb+srv://${user}:${password}@cluster0.mwlyo.mongodb.net/${dataB}?retryWrites=true&w=majority`;
const options={useNewUrlParser: true, useUnifiedTopology: true};


const user2='daimerospina';
const password2='dmospinac';
const dataB2='login';
const urlDB =`mongodb+srv://${user2}:${password2}@cluster0.mwlyo.mongodb.net/${dataB2}?retryWrites=true&w=majority`;
//vencimiento token

process.env.CADUCIDAD_TOKEN='48h'

//semilla de autenticacion
process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION || 'este es la semilla'

mongoose.createConnection(urlDB,{
    useNewUrlParser : true,

    useUnifiedTopology : true},
    (err)=>{
    if(err)throw err;
    console.log('base de datos online')
});



mongoose.connect(uri,options).then(
    ()=>{console.log('conectado a clienteDB')},
    err=> {console.log(err)}
);

//MIDEDLEWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//  RUTA
app.use('/api', require('./routes/clientesruta'));
app.use('/api', require('./routes/index'));

let renderHTML= path.resolve(__dirname,'../public/index.html');

app.get('/',function(res,que){
res.sendfile(renderHTML);

});

//MIDEDLEWARES para vue.js
const history=require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));

//  PUERTO

app.set('puerto', process.env.PORT||3000);
app.listen(app.get('puerto'),function(){
    console.log('example app listening on port'+app.get('puerto'));
});