// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import connectCloudinary from './config/cloudinary.js'
// import userRouter from './routes/userRoute.js'
// import productRouter from './routes/productRoute.js'
// import cartRouter from './routes/cartRoute.js'
// import orderRouter from './routes/orderRoute.js'

// // App Config
// const app = express()
// const port = process.env.PORT || 4000
// connectDB()
// connectCloudinary()

// // middlewares
// app.use(express.json())
// app.use(cors())

// // api endpoints
// app.use('/api/user',userRouter)
// app.use('/api/product',productRouter)
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRouter)

// app.get('/',(req,res)=>{
//     res.send("API Working")
// })

// app.listen(port, ()=> console.log('Server started on PORT : '+ port))



// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import connectDB from './config/mongodb.js';
// import connectCloudinary from './config/cloudinary.js';
// import userRouter from './routes/userRoute.js';
// import productRouter from './routes/productRoute.js';
// import cartRouter from './routes/cartRoute.js';
// import orderRouter from './routes/orderRoute.js';

// // App Config
// const app = express();
// const port = process.env.PORT || 4000;

// // Database & Cloudinary Connection
// connectDB();
// connectCloudinary();

// // Middlewares
// app.use(express.json());
// app.use(cors());

// // API Routes
// app.use('/api/user', userRouter);
// app.use('/api/product', productRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRouter);

// // Test Route
// app.get('/', (req, res) => {
//   res.send('API Working');
// });

// // Server Start
// app.listen(port, () => console.log(`Server started on PORT : ${port}`));




// import express from 'express'; 
// import cors from 'cors';
// import 'dotenv/config';  // Loads environment variables from .env file
// import connectDB from './config/mongodb.js';  // Database connection
// import connectCloudinary from './config/cloudinary.js';  // Cloudinary connection
// import userRouter from './routes/userRoute.js';  // User route import
// import productRouter from './routes/productRoute.js';  // Product route import
// import cartRouter from './routes/cartRoute.js';  // Cart route import
// import orderRouter from './routes/orderRoute.js';  // Order route import

// // App Config
// const app = express();
// const port = process.env.PORT || 4000;  // Port from env variable or default to 4000

// // Connect to Database & Cloudinary
// connectDB();  // Connect to MongoDB
// connectCloudinary();  // Connect to Cloudinary for image uploads

// // Middlewares
// app.use(express.json());  // Parse JSON requests
// app.use(cors());  // Enable Cross-Origin Resource Sharing

// // API Routes (all API endpoints)
// app.use('/api/user', userRouter);  // User-related routes
// app.use('/api/product', productRouter);  // Product-related routes
// app.use('/api/cart', cartRouter);  // Cart-related routes
// app.use('/api/order', orderRouter);  // Order-related routes

// // Test Route (Optional, useful for checking server)
// app.get('/', (req, res) => {
//   res.send('API Working');
// });

// // Global Error Handling (Optional, improves server robustness)
// app.use((err, req, res, next) => {
//   console.error(err.stack);  // Log errors to the console
//   res.status(500).json({ success: false, message: 'Something went wrong!' });
// });

// // Start the Server
// app.listen(port, () => console.log(`Server started on PORT : ${port}`));

import express from 'express'; 
import cors from 'cors';
import path from 'path';               // <-- add this import
import 'dotenv/config';                // Loads environment variables from .env file
import connectDB from './config/mongodb.js';         // Database connection
import connectCloudinary from './config/cloudinary.js';  // Cloudinary connection
import userRouter from './routes/userRoute.js';       // User route import
import productRouter from './routes/productRoute.js'; // Product route import
import cartRouter from './routes/cartRoute.js';       // Cart route import
import orderRouter from './routes/orderRoute.js';     // Order route import

// App Config
const app = express();
const port = process.env.PORT || 4000;  // Port from env variable or default to 4000

// Connect to Database & Cloudinary
connectDB();         // Connect to MongoDB
connectCloudinary(); // Connect to Cloudinary for image uploads

// Middlewares
app.use(express.json());  // Parse JSON requests
app.use(cors());          // Enable Cross-Origin Resource Sharing

// Static React frontend build folder serve korbo
app.use(express.static(path.join(process.cwd(), 'build')));

// API Routes (all API endpoints)
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Test Route (Optional, useful for checking server)
app.get('/api/test', (req, res) => {
  res.send('API Working');
});

// React frontend routing er jonno catch-all route
// Je kono route jeta /api na, index.html serve korbe (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'build', 'index.html'));
});

// Global Error Handling (Optional, improves server robustness)
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log errors to the console
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// Start the Server
app.listen(port, () => console.log(`Server started on PORT : ${port}`));
