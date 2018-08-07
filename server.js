const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require("path")
const port = process.env.PORT || 5800
const secret = process.env.SECRET || "some secret passphrase here for local development"
require('dotenv').config()  

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/taskmanager', (err) => {
    if (err) throw err
    console.log('Connected to database')
})

app.use('/wine', require('./routes/wine'))
app.use('/food', require('./routes/food'))

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log('Server is running on port 5800')
})

