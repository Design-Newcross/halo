import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  icon: string;
}

export const PageHeader = ({ title, description, icon }: PageHeaderProps): JSX.Element => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <h1 className="text-3xl font-headers-h2 text-[#002858] mb-2">
            {title}
          </h1>
          <p className="text-[#525356] font-body-p1">
            {description}
          </p>
        </div>
      </div>
      <div className="h-px bg-[#d0d0d2]" />
    </div>
  );
};