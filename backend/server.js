'use strict'

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8081

const getFruirt = require('./Controllers/Fruite.controller')
const Crud = require('./Controllers/Schema.controller')
mongoose.connect('mongodb://localhost:27017/art', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/fruits', getFruirt)

app.post('/fruits/list', Crud.createFruitePiece)
app.get('/fruits/list', Crud.getFruitePiece)
app.delete('/fruits/list/:slug', Crud.deleteFruitePiece)
app.put('/fruits/list/:slug', Crud.putFruitePiece)

//test my server
app.get('/', (req, res) => {
  res.send('Server working well')
})

app.listen(PORT, () => {
  console.log(`Server work at ${PORT}`);
})