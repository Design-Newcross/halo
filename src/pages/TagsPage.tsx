import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { TagSection } from '../screens/AllStatuses/sections/TagSection';

export const TagsPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Tags" 
        description="Tag and badge components in various states"
        icon="🏷️"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <TagSection />
      </div>
    </div>
  );
};