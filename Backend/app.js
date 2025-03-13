import express from 'express';
import { Server } from 'socket.io';

const app = express();
const port = 3000;

// Initialize Socket.IO directly with the Express app
const server =app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const io = new Server(server);
console.log("🚀 ~ io:", io)

io.on('connection', (socket) => {
    console.log('Socket Connection', socket.id);
    // You can handle other socket events here
});

app.get('/', (req, res) => {
    console.log("Request received");
    res.send("working");
});

// Start the server directly
