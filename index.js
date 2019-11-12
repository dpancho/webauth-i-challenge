const server = require('./api/server.js')

const port = 4400

server.listen(port, () => {
    console.log(`listening on port: ${port}`)
}) 