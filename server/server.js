const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/taskmanager', (err => {
    if (err) throw err
    console.log('Connected to database')
}))

app.use('/wine', require('./routes/wine'))
app.use('/food', require('./routes/food'))

app.listen(5800, () => {
    console.log('Server is running on port 5800')
})