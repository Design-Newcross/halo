import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { HeartIconSection } from '../screens/AllStatuses/sections/HeartIconSection';

export const HeartsPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Heart Icons" 
        description="Heart icon components"
        icon="❤️"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <HeartIconSection />
      </div>
    </div>
  );
};