import http from 'http'
import express from 'express'
import { WebSocketServer } from 'ws'

const app = express()
const server = http.createServer(app)
const wss = new WebSocketServer({ server })

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});




app.get('/', (req, res) => {
  res.send('helloword')
})

server.listen(3000, () => {
  console.log("服务器开启成功")
})