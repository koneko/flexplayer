require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const path = require('path')
const fs = require("fs")
// app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/script.js'))
})


app.get("/api/path", async (req, res) => {
    let path = req.query.q
    console.log(path)
    if (!path) return res.send('No path provided.')
    fs.readdir(path, (err, files) => {
        res.send(files)
    })
    // res.send()
})

app.get('/api/file', async (req, res) => {
    let path = req.query.q
    // res.sendFile(fs.readFile(path, (err, file) => {}))
    res.sendFile(path)
})

const readPath = async (path) => {
    let out = await fs.readdir(path, (err, files) => {
        return files
    })
    return out

}

app.listen(port, () => console.log('Listening on port ' + port))