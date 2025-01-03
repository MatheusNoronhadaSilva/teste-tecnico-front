import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-[750px] border-2 border-b-0 border-black flex flex-col items-start">
      {children}
    </div>
  )
}

export default Container;
