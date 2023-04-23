// create an express app
const express = require("express")
var cors = require('cors')
const bodyParser = require("body-parser")
const fs = require('fs');

const app = express()
app.use(cors())

// use the express-static middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
//define routes
const routes = require('./routes/route')
app.use('/', routes)

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));