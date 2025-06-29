
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, User, Image } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-pink-100 via-purple-50 to-indigo-100 shadow-sm border-b border-pink-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-2 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-200">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                StoryKids
              </h1>
              <p className="text-sm text-gray-600">Share Your Adventures</p>
            </div>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive('/') 
                  ? 'bg-pink-200 text-pink-700' 
                  : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              <Heart className="h-5 w-5" />
              <span className="font-medium">Stories</span>
            </Link>
            
            <Link
              to="/create"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive('/create') 
                  ? 'bg-purple-200 text-purple-700' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              <Image className="h-5 w-5" />
              <span className="font-medium">Create</span>
            </Link>
            
            <Link
              to="/profile"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive('/profile') 
                  ? 'bg-indigo-200 text-indigo-700' 
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <User className="h-5 w-5" />
              <span className="font-medium">Profile</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
