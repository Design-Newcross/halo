import React from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen bg-neutral-100 flex">
      <Navigation />
      <main className="flex-1 md:ml-0">
        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};