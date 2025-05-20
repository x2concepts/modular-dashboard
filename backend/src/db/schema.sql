-- Dashboard configurations
CREATE TABLE dashboards (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Widget instances with positions and configurations
CREATE TABLE widgets (
  id TEXT PRIMARY KEY,
  dashboard_id TEXT NOT NULL,
  widget_type_id TEXT NOT NULL,
  title TEXT,
  x INTEGER NOT NULL,
  y INTEGER NOT NULL,
  width INTEGER NOT NULL,
  height INTEGER NOT NULL,
  config TEXT, -- JSON storage for widget-specific configuration
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (dashboard_id) REFERENCES dashboards(id) ON DELETE CASCADE
);

-- Integration configurations
CREATE TABLE integrations (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL, -- "homeassistant", "airtable", "grafana", etc.
  name TEXT NOT NULL,
  config TEXT, -- JSON storage for connection details
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User preferences
CREATE TABLE preferences (
  id TEXT PRIMARY KEY,
  dark_mode BOOLEAN DEFAULT 0,
  column_count INTEGER DEFAULT 6,
  language TEXT DEFAULT 'en',
  voice_enabled BOOLEAN DEFAULT 0,
  config TEXT, -- JSON storage for additional preferences
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);