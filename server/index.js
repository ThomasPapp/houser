require('dotenv').config()
const massive = require('massive')
const { json } = require('body-parser')
const express = require('express')

const app = express()
app.use(json())

const PORT = process.env.SERVER_PORT || 3001
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))