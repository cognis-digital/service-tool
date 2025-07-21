import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Home } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Cognis Digital LLC</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <Home className="h-4 w-4" />
                <span>Services</span>
              </Link>
              <Link to="/build" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <Package className="h-4 w-4" />
                <span>Build Package</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;