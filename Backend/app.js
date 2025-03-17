import express from 'express';
import { Server } from 'socket.io';
import connectDba from "./src/config/connectDb.js"
import userRouter from "./src/routes/userRoute.js"

const app = express();
const port = 3000;

connectDba.connectDb()

// Initialize Socket.IO directly with the Express app
const server =app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use("/user",userRouter)
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Socket Connection', socket.id);
    // You can handle other socket events here
});

app.get('/', (req, res) => {
    console.log("Request received");
    res.send("working");
});

// Start the server directly
