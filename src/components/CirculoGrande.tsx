import React from 'react';

interface CirculoGrandeProps {
  children: React.ReactNode;
}

const CirculoGrande: React.FC<CirculoGrandeProps> = ({ children }) => {
  return (
    <div className="min-w-14 h-14 p-2 rounded-full bg-cor-principal flex items-center justify-center">
      {children}
    </div>
  )
}

export default CirculoGrande;
