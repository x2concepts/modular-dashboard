import { Server } from 'socket.io';
import http from 'http';

export function setupSocketIO(httpServer: http.Server) {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:5173',
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  // Handle connections
  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // Handle widget data updates
    socket.on('widget:update', (data) => {
      // Broadcast updates to all other clients
      socket.broadcast.emit('widget:updated', data);
    });

    // Handle voice commands (placeholder for future implementation)
    socket.on('voice:command', async (audioData) => {
      try {
        // This will be implemented in Phase 3
        const response = {
          text: "Voice commands will be implemented in Phase 3",
          success: true
        };
        
        socket.emit('voice:response', response);
      } catch (error) {
        console.error('Error processing voice command:', error);
        socket.emit('voice:error', { message: 'Failed to process voice command' });
      }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });

  return io;
}