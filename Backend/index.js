const WebSocket = require('ws');
const http = require('http');

// WebSocket server that accepts secure connections (wss://)
const wss = new WebSocket.Server({ noServer: true });

// The actual WebSocket API you are connecting to (using ws://)
const API_WS_URL = 'ws://webhook.entitysport.com:8087/connect?token=73a2d66fb0d78c9d490d9a7f3699d79d';

// Proxy logic to forward messages from wss:// to ws://
wss.on('connection', (ws) => {
  console.log('Client connected to WebSocket Proxy');

  // Connect to the external WebSocket API (ws://)
  const apiSocket = new WebSocket(API_WS_URL);

  // On message from the frontend (wss://), forward to the WebSocket API (ws://)
  ws.on('message', (message) => {
    console.log('Received from frontend, forwarding to API:', message);
    apiSocket.send(message);
  });

  // On message from the WebSocket API (ws://), forward to the frontend (wss://)
  apiSocket.on('message', (message) => {
    console.log('Received from API, forwarding to frontend:', message);
    ws.send(message);
  });

  // Handle errors
  ws.on('error', (err) => {
    console.error('WebSocket error:', err);
  });

  apiSocket.on('error', (err) => {
    console.error('WebSocket API error:', err);
  });

  // Close connections when either side closes
  ws.on('close', () => {
    console.log('Frontend WebSocket connection closed');
    apiSocket.close();
  });

  apiSocket.on('close', () => {
    console.log('WebSocket API connection closed');
    ws.close();
  });
});

// Set up the HTTP server to handle WebSocket connections
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket Proxy Server is running\n');
});

// Upgrade HTTP connections to WebSocket connections
server.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req);
  });
});

// Start the server on port 8080
server.listen(8080, () => {
  console.log('WebSocket Proxy Server is running on wss://localhost:8080');
});
