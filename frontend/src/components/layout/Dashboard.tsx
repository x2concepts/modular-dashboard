import React, { useEffect, useRef } from 'react';
import { GridStack, GridStackNode, GridStackOptions } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';

interface DashboardProps {
  children?: React.ReactNode;
  config?: GridStackOptions;
}

export const Dashboard: React.FC<DashboardProps> = ({ children, config }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInstance = useRef<GridStack | null>(null);

  const defaultConfig: GridStackOptions = {
    column: 6, // For vertical display, use fewer columns
    cellHeight: '80px',
    margin: 10,
    disableOneColumnMode: true, // Consider the implications for responsive design
    float: false,
    staticGrid: false,
    animate: true,
  };

  useEffect(() => {
    if (gridRef.current && !gridInstance.current) {
      // Initialize GridStack
      gridInstance.current = GridStack.init({
        ...defaultConfig,
        ...config,
      }, gridRef.current);
    }
    
    // Clean up on unmount
    return () => {
      if (gridInstance.current) {
        gridInstance.current.destroy();
        gridInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="h-full">
      <div ref={gridRef} className="grid-stack h-full">
        {children}
      </div>
    </div>
  );
};