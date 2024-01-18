const express = require('express') ;
const cors = require('cors') ;

const app = express() ;
const port = 3000 ;
app.use(cors())
const apiData = require("./data.json")


app.get('/services', (req, res) => {
    res.send(apiData)


})

app.listen(port, () => {
    console.log("server is running")
})