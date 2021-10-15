import express from 'express';
const router=express.Router();

import Cliente from '../models/cliente.js'

//agregar una cliente

router.post('/cliente-nuevo',async(req,res)=>{
    const body=req.body;
    try {
        const clienteDB=await Cliente.create(body);
        res.status(200).json(clienteDB);
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        })
    }

});

// obtener un cliente con parametro
router.get('/cliente/:id',async(req,res)=>{
    const _id=req.params.id;
    try {
        const clienteDB=await Cliente.findOne({_id});
        res.json(clienteDB);
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});
// obtener un cliente de todos los datos guardados
router.get('/cliente/',async(req,res)=>{
    
    try {
        const clienteDB=await Cliente.find();
        res.json(clienteDB);
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});

//borrar un cliente
router.delete('/borrar-cliente/:id', async(req,res)=>{
    const _id=req.params.id;

    try {
        const clienteDB=await Cliente.findByIdAndDelete({_id});
        if(!clienteDB){
            return res.status(400).json({
                mensaje:'No se encontro el ID indicado',
                error
            })
        }
        res.json(clienteDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});

//actualizar un cliente
router.put('/editar-cliente/:id',async(req,res)=>{
    const _id =req.params.id;
    const body=req.body;
    try {
        const clienteDB= await Cliente.findByIdAndUpdate(
            _id, body, {new:true});
            res.json(clienteDB);
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
})

module.exports=router;