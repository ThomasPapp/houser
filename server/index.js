require('dotenv').config()
const massive = require('massive')
const { json } = require('body-parser')
const express = require('express')
const controller = require('./controller')

const app = express()
app.use(json())

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('Connected to database')
})

app.post('/api/listings', controller.addListing)
app.get('/api/listings', controller.getListings)
app.delete('/api/listings/:id', controller.removeListing)

const PORT = process.env.SERVER_PORT || 3001
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))