import express from 'express';
const router = express.Router();

const clients = [];

router.get('/webdisplay', (req, res) => {
  console.log('New web display connected');
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  res.flushHeaders();

  

  res.write('retry: 10000\n\n');  // optional reconnect interval

  clients.push(res);

  req.on('close', () => {
    clients.splice(clients.indexOf(res), 1);
  });
});

function broadcastToWebDisplays(data) {
  clients.forEach(client =>
    client.write(`data: ${JSON.stringify(data)}\n\n`)
  );
}

export default router;

export {broadcastToWebDisplays};
