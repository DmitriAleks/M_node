// const chalk = require('chalk')
// const text = require('./data.js')
//nodemon - для тогоа что бы не прегружать сервер, что бы увидить изменения
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, response) => {

    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if(err){
    //             throw err
    //         }
    //         response.writeHead(200,{
    //             'Content-Type' : 'text/html'
    //         })
    //         response.end(data)
    //     })
    // } else if(req.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if(err){
    //             throw err
    //         }
    //         response.writeHead(200,{
    //             'Content-Type' : 'text/html'
    //         })
    //         response.end(data)
    //     })
    // }

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    const ext = path.extname(filePath)

    let contentType = 'text/html'

    switch (ext){
        case '.css':
            contentType = 'text/css'
            break
        case '/js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    if(!ext){
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if(err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if(err) {
                    response.writeHead(500)
                    response.end('Error')
                } else {
                    response.writeHead(200, {
                        'Content-Type' : contentType
                    })
                    response.end(data)
                }

            })
        } else {
            response.writeHead(200, {
                'Content-Type' : contentType
            })
            response.end(content)
        }

    })
})

const PORT = process.env.PORT || 3003

server.listen(PORT, ()=> {
    console.log(`Server has been started ${PORT}...`)
})