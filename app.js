const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 1234
const bodyParser = require('body-parser')
const producer = require('./kafka')
producer.init()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/send-messages', async (req, res) => {
    const { topic, messages } = req.body
    const result = await producer.sendMessages(topic, [{
        value: messages
    }])
    res.jsonp(result)
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})