const express = require('express')
const wineRouter = express.Router()
const Wine = require('../models/wine')

wineRouter.get('/', (req, res) => {
    Wine.find((err, wine) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(wine)
    })
})

wineRouter.get('/:id', (req, res) => {
    Wine.findById({ _id: req.params.id }, (err, indWine) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(indWine)
    })
})

wineRouter.post('/', (req, res) => {
    const newWine = new Wine(req.body)
    newWine.save((err, newIssue) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(newWine)
    })
})

wineRouter.post('/:id/comments', (req, res) => {
    Wine.findByIdAndUpdate(
        req.params.id,
        {$push: {comments: req.body}},
        {new: true},
        (err, updatedWine) => {
            if (err) return res.status(500).send(err)
            return res.send(updatedWine)
        }
    )
})

module.exports = wineRouter