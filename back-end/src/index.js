import express from 'express'
import mongoose from 'mongoose'


const express =require('express')

const app = express()

app.set('port', 5000)

app.listen(app.get('port'),()=>{
    console.log('Servidor levantado en el puerto', app.get('port'))
    
})

app.get('/', (req, res)=>{
    res.json({message: "Bienvenido a mi backEnd! Comunícate mediante peticiones a mi API-REST"})
})

app.post('/', (req, res)=>{
    res.json({message: "Estas reaizando una petición tipo POST! No recibo Request"})
})

mongoose.connect('mongodb+srv://admin:leanma00@cluster0.i4ydytv.mongodb.net/?retryWrites=true&w=majority')