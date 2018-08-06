const express = require('express')
const foodRouter = express.Router()
const Food = require('../models/food')

foodRouter.get('/', (req, res) => {
    Food.find((err, food) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(food)
    })
})

foodRouter.get('/:id', (req, res) => {
    Food.findById({ _id: req.params.id }, (err, indFood) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(indFood)
    })
})

foodRouter.post('/', (req, res) => {
    const newFood = new Food(req.body)
    newFood.save((err, newIssue) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(newFood)
    })
})

foodRouter.delete('/:id', (req, res) => {
    Food.findOneandRemove({ _id: req.params.id }, (err, deletedFood) => {
        if (err) return res.status(500).send(err);
        return res.send({ message: "Food was successfully deleted", deletedFood})
    })
})

module.exports = foodRouter