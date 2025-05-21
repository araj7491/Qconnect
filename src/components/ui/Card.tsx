import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  className?: string;
}

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={twMerge('p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={twMerge(
        'bg-white rounded-xl shadow-card',
        hover && 'transition-shadow duration-200 hover:shadow-card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-4 border-b border-neutral-200 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-4 border-t border-neutral-200 ${className}`}>
      {children}
    </div>
  );
};

export default Card;