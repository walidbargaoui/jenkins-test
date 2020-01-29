const express = require('express')
const app = express()
const path = require('path')

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
    server.keepAliveTimeout = 0;
    console.log('Server is up on port ' + port)
})