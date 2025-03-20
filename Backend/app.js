import express from 'express';
import { Server } from 'socket.io';
import connectDba from "./src/config/connectDb.js"
import userRouter from "./src/routes/userRoute.js"
import Product from "./src/models/productModel.js";
import Bid from "./src/models/bitModel.js";

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

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
  
    socket.on("placeBid", async ({ productId, userId, amount }) => {
      try {
        const product = await Product.findById(productId);
        if (!product) {
          return socket.emit("error", "Product not found");
        }
  
        if (amount <= product.price) {
          return socket.emit("error", "Bid must be higher than the current price");
        }
  
        const newBid = new Bid({ user: userId, product: productId, amount });
        await newBid.save();
  
        product.price = amount;
        await product.save();
  
        io.emit("newBid", { productId, amount, userId });
      } catch (error) {
        console.error(error);
        socket.emit("error", "An error occurred while placing the bid");
      }
    });
  
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

app.get('/', (req, res) => {
    console.log("Request received");
    res.send("working");
});

// Start the server directly
