import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { RadioButtonSection } from '../screens/AllStatuses/sections/RadioButtonSection';

export const RadioButtonsPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Radio Buttons" 
        description="Radio button groups and cards for single selection"
        icon="🔘"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <RadioButtonSection />
      </div>
    </div>
  );
};