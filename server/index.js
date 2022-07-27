const { WebSocketServer, WebSocket } = require('ws');

const wss = new WebSocketServer({ port: 6408 });

wss.on('connection', (ws) => {
	ws.on('message', (data, isBinary) => {
		wss.clients.forEach(function each(client) {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				client.send(data, { binary: isBinary });
			}
		});
	});
});
