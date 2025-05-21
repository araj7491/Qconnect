import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Search, Menu, X, Bell, MessageSquare, User } from 'lucide-react';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/study-groups" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-colors"
            >
              Study Groups
            </Link>
            <Link 
              to="/forum" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-colors"
            >
              Forums
            </Link>
            <Link 
              to="/resources" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-colors"
            >
              Resources
            </Link>
          </nav>

          {/* Search and Auth Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full bg-neutral-100 focus:bg-white border border-transparent focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all outline-none w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
            </div>

            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <button className="relative p-2 rounded-full hover:bg-neutral-100 transition-colors">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
                </button>
                <button className="relative p-2 rounded-full hover:bg-neutral-100 transition-colors">
                  <MessageSquare size={20} />
                </button>
                <div className="relative group">
                  <button className="flex items-center space-x-2 rounded-full p-1 hover:bg-neutral-100 transition-colors">
                    <img 
                      src={user?.avatar || 'https://via.placeholder.com/40'} 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                      Your Profile
                    </Link>
                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                      Dashboard
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                      Settings
                    </Link>
                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                  Log in
                </Link>
                <Link 
                  to="/register" 
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute left-0 right-0 top-full">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-neutral-100 focus:bg-white border border-transparent focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
          </div>

          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-colors py-2"
            >
              Home
            </Link>
            <Link 
              to="/study-groups" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-colors py-2"
            >
              Study Groups
            </Link>
            <Link 
              to="/forum" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-colors py-2"
            >
              Forums
            </Link>
            <Link 
              to="/resources" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-colors py-2"
            >
              Resources
            </Link>
          </nav>

          {isAuthenticated ? (
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src={user?.avatar || 'https://via.placeholder.com/40'} 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{user?.username}</p>
                  <p className="text-sm text-neutral-500">{user?.email}</p>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <Link to="/profile" className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors py-2">
                  <User size={18} className="mr-2" /> Your Profile
                </Link>
                <Link to="/dashboard" className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors py-2">
                  <User size={18} className="mr-2" /> Dashboard
                </Link>
                <button onClick={logout} className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors py-2">
                  <User size={18} className="mr-2" /> Sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4 pt-4 border-t border-neutral-200 flex flex-col space-y-3">
              <Link to="/login" className="w-full py-2 text-center text-primary-600 hover:text-primary-700 font-medium border border-primary-600 rounded-md transition-colors">
                Log in
              </Link>
              <Link to="/register" className="w-full py-2 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors">
                Sign up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;