const express = require ('express')
const app = express()
const router = require ('./routers/musicasRoute')

app.use(express.json())//parsear usando a extenção express, transformando o app para json
app.use('/', router)

module.exports = app 