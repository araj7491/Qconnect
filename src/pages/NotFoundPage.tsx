import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Home, Search, HelpCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-neutral-50">
      <motion.div 
        className="max-w-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
            <HelpCircle size={80} />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-neutral-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          Oops! The page you're looking for doesn't seem to exist. 
          It might have been moved, deleted, or perhaps never existed in the first place.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button 
              variant="primary" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Home size={18} />
              <span>Go to Homepage</span>
            </Button>
          </Link>
          <Link to="/help">
            <Button 
              variant="outline" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <HelpCircle size={18} />
              <span>Help Center</span>
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-neutral-500 mb-4">Looking for something specific? Try searching:</p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search Qconnect..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;