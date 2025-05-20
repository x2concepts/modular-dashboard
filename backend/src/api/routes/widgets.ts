import express from 'express';

const router = express.Router();

// Get all widgets for a dashboard
router.get('/:dashboardId', (req, res) => {
  // This will be implemented with database integration
  res.json([
    {
      id: 'widget1',
      widgetTypeId: 'sensor',
      config: {
        x: 0,
        y: 0,
        width: 2,
        height: 2,
        title: 'Temperature Sensor',
        entityId: 'sensor.living_room_temperature'
      }
    },
    {
      id: 'widget2',
      widgetTypeId: 'airtable',
      config: {
        x: 2,
        y: 0,
        width: 2,
        height: 1,
        title: 'Task List',
        tableName: 'Tasks',
        viewName: 'Grid view'
      }
    }
  ]);
});

// Create a new widget
router.post('/', (req, res) => {
  const widget = req.body;
  // This will be implemented with database integration
  res.status(201).json(widget);
});

// Update a widget
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const widget = req.body;
  // This will be implemented with database integration
  res.json({ ...widget, id });
});

// Delete a widget
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // This will be implemented with database integration
  res.status(204).end();
});

export default router;