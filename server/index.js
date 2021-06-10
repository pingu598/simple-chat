const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989 })

const users = []

const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && client !== ws) {
        client.send(JSON.stringify(data))
      }
    })
  }
wss.on('connection', (ws) => {
    let index
    ws.on('message', (message) => {
        const data = JSON.parse(message)
        switch (data.type) {
            case 'ADD_USR': {
                index = users.length
                users.push({user: data.user, id: index + 1})
                ws.send(JSON.stringify({
                    type: 'USR_LST',
                    users
                }))
                broadcast({
                    type: 'USR_LST',
                    users
                }, ws)
                break
            }
            case 'ADD_MSG': 
                broadcast({
                    type: 'ADD_MSG',
                    message: data.message,
                    user: data.user
                }, ws)
                break
            default:
                break
        }
    })
    ws.on('close', () => {
        users.splice(index,1)
        broadcast({
            type: 'USR_LST',
            users
        }, ws)
    })
    
})