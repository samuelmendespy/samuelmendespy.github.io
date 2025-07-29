import React, { type ReactNode } from 'react';


interface SectionProps {
  children: ReactNode;
  isActive: boolean;
}

const Section: React.FC<SectionProps> = ({ children, isActive }) => {
  return (
    <div
      className={`
        absolute top-0 left-0 w-full h-full
        flex items-center justify-center p-8 md:p-16
        transition-opacity duration-700 ease-in-out
        ${isActive ? 'opacity-100 z-10' : 'opacity-0 -z-10 pointer-events-none'}
      `}
    >
      {children}
    </div>
  );
};

export default Section;