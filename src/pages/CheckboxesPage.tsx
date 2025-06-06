import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { CheckboxSection } from '../screens/AllStatuses/sections/CheckboxSection';

export const CheckboxesPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Checkboxes" 
        description="Checkbox components and cards in various states"
        icon="☑️"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <CheckboxSection />
      </div>
    </div>
  );
};