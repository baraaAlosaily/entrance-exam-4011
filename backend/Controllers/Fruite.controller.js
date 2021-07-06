
const { default: axios } = require('axios')
const { response } = require('express')
const getModel = require('../Models/Fruits.mode')


const getFruirt = async (req, res) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
  axios.get(url).then(response => {
    // console.log(response.data.drinks.strDrinkThumb);
    const newFruit = response.data.drinks.map(obj => {
      return new getModel(obj)
    })
    res.send(newFruit)
  }).catch(error => {
    console.log('===========');
    console.log('Error Catched');
    console.log('===========');
    console.log(error);
  })
}

module.exports = getFruirt