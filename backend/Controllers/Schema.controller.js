'use strict'

const fruitPiece = require('../Models/Schema.Model')

const createFruitePiece = async (req, res) => {
  const { strDrink, strDrinkThumb } = req.body
  const slug = strDrink.toLowerCase().split(' ').join('-')
  fruitPiece.find({ strDrink: strDrink }, (error, data) => {
    if (data.length > 0) {
      res.send('Data Has Already exist')
    } else {
      const newFruit = new fruitPiece({ strDrink: strDrink, strDrinkThumb: strDrinkThumb, slug: slug })
      newFruit.save()
      res.send(newFruit)
    }
  })
}
const getFruitePiece = async (req, res) => {
  fruitPiece.find({}, (error, data) => {
    res.send(data)
  })
}
const deleteFruitePiece = async (req, res) => {
  const slug = req.params.slug
  fruitPiece.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {
      res.send(data)
    }
  })
}

const putFruitePiece = async (req, res) => {
  const { strDrinkThumb, strDrink } = req.body
  const slug = req.params.slug
  fruitPiece.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {
      data[0].strDrinkThumb = strDrinkThumb
      data[0].strDrink = strDrink
      data[0].save()
      res.send(data)
    }
  })
}

module.exports = {
  createFruitePiece,
  getFruitePiece,
  deleteFruitePiece,
  putFruitePiece
}