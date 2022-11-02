const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")


const app = express()

app.use(express.json())

app.use(express.urlencoded())

app.use(cors())

mongoose.connect("mongodb://localhost:27017/abcd", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})







app.listen(9000,() => {
    console.log("BE started at port 9000")
})