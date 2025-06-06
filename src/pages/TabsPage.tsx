import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { TabGroupSection } from '../screens/AllStatuses/sections/TabGroupSection';

export const TabsPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Tab Groups" 
        description="Tab navigation components in various states"
        icon="📑"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <TabGroupSection />
      </div>
    </div>
  );
};