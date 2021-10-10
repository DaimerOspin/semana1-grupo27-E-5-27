import express from 'express';
const router=express.Router();

import Nota from '../models/nota.js'

//agregar una nota

router.post('/nota-nueva',async(req,res)=>{
    const body=req.body;
    try {
        const notaDB=await Nota.create(body);
        res.status(200).json(notaDB);
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            error
        })
    }

});

module.exports=router;

