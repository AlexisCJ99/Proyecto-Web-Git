const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/tour', (req, res) => {
  res.render('tour')
})

router.get('/precios', (req, res) => {
  res.render('precios')
})

router.get('/cotizaciones', (req, res) => {
  res.render('cotizaciones')
})

module.exports = router