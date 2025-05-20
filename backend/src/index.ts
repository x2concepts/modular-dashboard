import express from 'express';
import http from 'http';
import cors from 'cors';
import { config } from 'dotenv';
import { setupSocketIO } from './socket';
import apiRoutes from './api';

// Load environment variables
config();

// Create Express app
const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Socket.IO
setupSocketIO(server);

// API routes
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app, server };