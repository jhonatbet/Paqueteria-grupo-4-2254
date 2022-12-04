let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

let paqueteSchema = require('../models/Paquete');

// CRUD

// Create
//localhost:5000/paquetes/create
router.route('/create').post((req, res, next) => {
    paqueteSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Paquetes
//localhost:5000/paquetes/
//localhost:5000/books?userId=1234
router.route('/').get((req, res, next) => {
    paqueteSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Paquetes
//localhost:5000/paquetes/1
router.route('/:id').get((req, res, next) => {
    paqueteSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Paquetes
//localhost:5000/paquetes/edit/2
router.route('/edit/:id').put((req, res, next) => {
    paqueteSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log('Orden updated successfully !')
            res.json(data)
        }
    })
})

// Delete Paquetes
//localhost:5000/books/delete/2
router.route('/delete/:id').delete((req, res, next) => {
    paqueteSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports = router