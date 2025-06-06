import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { componentRoutes } from '../../types/navigation';
import { Button } from '../ui/button';
import { MenuIcon, XIcon, HomeIcon } from 'lucide-react';

export const Navigation = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          onClick={toggleMenu}
          className="bg-[#28e9c6] text-[#002858] rounded-full p-3 shadow-lg hover:bg-[#20d4b1] transition-all duration-200"
        >
          {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </Button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:relative md:w-80 md:shadow-none md:border-r md:border-[#b9b9bc]
      `}>
        <div className="p-6 border-b border-[#b9b9bc]">
          <h1 className="text-2xl font-headers-h2 text-[#002858] mb-2">
            🍄 Component Library
          </h1>
          <p className="text-sm text-[#525356] font-body-p2">
            Navigate through all component variations
          </p>
        </div>

        <div className="p-4">
          {/* Home Link */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`
              flex items-center gap-3 p-3 rounded-lg mb-2 transition-all duration-200 hover:bg-[#28e9c6] hover:text-[#002858]
              ${location.pathname === '/' ? 'bg-[#28e9c6] text-[#002858]' : 'text-[#525356] hover:text-[#002858]'}
            `}
          >
            <HomeIcon className="w-5 h-5" />
            <div>
              <div className="font-body-p1-action">All Components</div>
              <div className="text-xs text-[#898b8f]">Overview page</div>
            </div>
          </Link>

          <div className="h-px bg-[#d0d0d2] my-4" />

          {/* Component Links */}
          <div className="space-y-1">
            {componentRoutes.map((route) => (
              <Link
                key={route.id}
                to={route.path}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-[#28e9c6] hover:text-[#002858]
                  ${location.pathname === route.path ? 'bg-[#28e9c6] text-[#002858]' : 'text-[#525356] hover:text-[#002858]'}
                `}
              >
                <span className="text-lg">{route.icon}</span>
                <div className="flex-1">
                  <div className="font-body-p1-action">{route.name}</div>
                  <div className="text-xs text-[#898b8f]">{route.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};