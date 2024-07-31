const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/tour', (req, res) => {
  res.render('tour')
})

router.get('/servicios', (req, res) => {
  res.render('servicios')
})

router.get('/galeria', (req, res) => {
  res.render('galeria')
})

router.get('/about', (req, res) => {
  res.render('about')
})

router.get('/precios', (req, res) => {
  res.render('precios')
})

router.get('/cotizaciones', (req, res) => {
  res.render('cotizaciones')
})

module.exports = router