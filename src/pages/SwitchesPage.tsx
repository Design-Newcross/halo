import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SwitchSection } from '../screens/AllStatuses/sections/SwitchSection';

export const SwitchesPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Switches" 
        description="Switch and toggle components in various states"
        icon="🔄"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <SwitchSection />
      </div>
    </div>
  );
};