import React from 'react';

interface CirculoPequenoProps {
  children: React.ReactNode;
  className?: string;
}

const CirculoPequeno: React.FC<CirculoPequenoProps> = ({ children, className }) => {
  return (
    <div className={`${className} w-8 h-8 rounded-full flex items-center justify-center`}>
      {children}
    </div>
  )
}

export default CirculoPequeno;
