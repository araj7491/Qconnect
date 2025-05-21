import React from 'react';
import { BookOpen } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-neutral-900';
  
  return (
    <div className="flex items-center">
      <div className="mr-2 p-1 bg-primary-500 rounded-md text-white">
        <BookOpen size={24} />
      </div>
      <span className={`font-display text-xl font-bold ${textColor}`}>
        <span className="text-primary-500">Q</span>connect
      </span>
    </div>
  );
};

export default Logo;