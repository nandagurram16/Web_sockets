// Index.js is a "server"
const websocket = require('ws')
const ws = new websocket.Server({port:8081})

ws.on("connection",(socket) =>{
    console.log('user connected')
    socket.on('message',(data) =>{
        console.log(' server data received:',data.toString())
        socket.send('data from sever' + data)
    })
    socket.on('close',()=>{
        console.log('disconnecetd')
    })
})