import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { ButtonSection } from '../screens/AllStatuses/sections/ButtonSection';

export const ButtonsPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Buttons" 
        description="Button components in various states and sizes"
        icon="🔘"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <ButtonSection />
      </div>
    </div>
  );
};