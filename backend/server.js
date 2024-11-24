const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const weddingRoutes = require('./routes/WeddingRoutes');
const hostRoutes = require('./routes/HostRoutes');
const guestRoutes = require('./routes/AuthRoutes');
const stripeRoutes = require('./routes/StripeRoutes');

const app = express();

// CORS Configuration
const corsOptions = {
  origin: 'https://savethedate-gzy9.onrender.com', // Allow only requests from localhost:3000 (your frontend)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add any methods your backend supports
  credentials: true, // If you are sending cookies or using sessions
};

// Use CORS middleware
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cookieparser());

// Routes
app.use('/api/weddings', weddingRoutes);
app.use('/api/hosts', hostRoutes);
app.use('/api/guests', guestRoutes);
app.use('/api/payments', stripeRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
