import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { FilterButtonSection } from '../screens/AllStatuses/sections/FilterButtonSection';

export const FiltersPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Filter Buttons" 
        description="Filter button variations with badges"
        icon="🔍"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <FilterButtonSection />
      </div>
    </div>
  );
};