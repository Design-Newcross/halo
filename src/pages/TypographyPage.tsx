import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { TypographySection } from '../screens/AllStatuses/sections/TypographySection';

export const TypographyPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Typography" 
        description="Typography system with headers, body text, and colour variations"
        icon="🔤"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <TypographySection />
      </div>
    </div>
  );
};