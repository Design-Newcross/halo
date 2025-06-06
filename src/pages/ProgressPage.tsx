import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { ProgressBarSection } from '../screens/AllStatuses/sections/ProgressBarSection';

export const ProgressPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Progress Bars" 
        description="Progress indicators with labels and values"
        icon="📊"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <ProgressBarSection />
      </div>
    </div>
  );
};