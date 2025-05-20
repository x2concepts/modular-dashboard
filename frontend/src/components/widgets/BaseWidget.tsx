import React from 'react';

export interface WidgetProps {
  id: string;
  title: string;
  width: number;
  height: number;
  x?: number;
  y?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  children?: React.ReactNode;
}

export const BaseWidget: React.FC<WidgetProps> = ({ 
  id, 
  title, 
  width, 
  height, 
  x = 0, 
  y = 0, 
  minWidth = 1, 
  minHeight = 1, 
  maxWidth, 
  maxHeight, 
  children 
}) => {
  return (
    <div 
      className="grid-stack-item" 
      gs-id={id}
      gs-x={x}
      gs-y={y}
      gs-w={width}
      gs-h={height}
      gs-min-w={minWidth}
      gs-min-h={minHeight}
      gs-max-w={maxWidth}
      gs-max-h={maxHeight}
    >
      <div className="grid-stack-item-content flex flex-col overflow-hidden">
        <div className="widget-header p-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h3 className="text-sm font-semibold truncate">{title}</h3>
          <div className="widget-controls flex space-x-1">
            <button className="text-xs p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
              ⚙️
            </button>
            <button className="text-xs p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
              ✖️
            </button>
          </div>
        </div>
        <div className="widget-content flex-grow p-2 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};