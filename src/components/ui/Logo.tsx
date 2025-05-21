import React from 'react';
import { twMerge } from 'tailwind-merge';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', ...props }) => {
  return (
    <div className={twMerge('flex items-center', className)} {...props}>
      <span className="text-2xl font-bold text-primary-600">Q</span>
      <span className="text-2xl font-bold text-neutral-900">connect</span>
    </div>
  );
};

export default Logo;