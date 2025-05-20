import express from 'express';
import widgetRoutes from './routes/widgets';
import configRoutes from './routes/config';

const router = express.Router();

// Register API routes
router.use('/widgets', widgetRoutes);
router.use('/config', configRoutes);

export default router;