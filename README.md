# Modular Dashboard

A modern, modular dashboard system designed for vertical displays with the following integrations:
- Home Assistant (sensors, camera feeds, lighting status)
- Airtable (cards, lists, timelines)
- Grafana (consumption metrics, historical data)
- Voice control via Speech-to-Text and Text-to-Speech
- LLM integration for processing commands

## Technology Stack

### Frontend
- React + Vite with TypeScript
- Tailwind CSS + DaisyUI
- grid-stack.js for responsive grid layout
- TanStack Query for data fetching
- Chart.js/D3.js for visualizations

### Backend
- Node.js + Express
- Socket.io for real-time updates
- Node-RED for integration middleware
- SQLite for configuration storage
- InfluxDB for time-series data

## Deployment
- Docker Compose for container orchestration
- Traefik for reverse proxy

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Docker and Docker Compose (for full deployment)

### Development Setup
1. Clone this repository
2. Install frontend dependencies: `cd frontend && npm install`
3. Install backend dependencies: `cd backend && npm install`
4. Start the development servers:
   - Frontend: `cd frontend && npm run dev`
   - Backend: `cd backend && npm run dev`

## Project Structure
```
modular-dashboard/
├── frontend/          # React + Vite frontend
├── backend/           # Node.js + Express backend
├── docker/            # Docker configuration
└── docker-compose.yml # Container orchestration
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.