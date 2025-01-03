import React from 'react';

interface CirculoMedioProps {
  children: React.ReactNode;
}

const CirculoMedio: React.FC<CirculoMedioProps> = ({ children }) => {
  return (
    <div className="w-10 h-10 p-2 rounded-full bg-cor-principal flex items-center justify-center">
      {children}
    </div>
  )
}

export default CirculoMedio;
