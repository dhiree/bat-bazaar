import express from 'express';
import { Server } from 'socket.io';
import {connectDb} from "./src/config/connectDb"
import userRouter from "./src/routes/userRoute"

const app = express();
const port = 3000;

connectDb()

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
