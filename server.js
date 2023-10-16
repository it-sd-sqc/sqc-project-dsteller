// Dependencies ////////////////////////////////////////////
import express from 'express'

// Configuration ///////////////////////////////////////////
const PORT = process.env.PORT || 5163

// Web server setup ////////////////////////////////////////
const app = express()
app.use(express.static('./public'))

//Error handling middleware 
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// Ready for browsers to connect ///////////////////////////
const displayPort = function () {
  console.log('Listening on ' + PORT)
}

app.listen(PORT, displayPort)
