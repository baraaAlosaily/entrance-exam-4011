'use strict'
const mongoose = require('mongoose')

const getSchema = mongoose.Schema({
  strDrink: {
    type: String,
    uniqe: true,
    lowercase: true,
    trim: true,
  },
  slug: {
    type: String,
    uniqe: true,
    lowercase: true,
    trim: true,
  },
  strDrinkThumb: String
})

const FruitSchema = mongoose.model('getSchema', getSchema)

module.exports = FruitSchema