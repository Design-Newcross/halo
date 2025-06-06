import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { LinksSection } from '../screens/AllStatuses/sections/LinksSection';

export const LinksPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Links" 
        description="Link components with various states and icons"
        icon="🔗"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <LinksSection />
      </div>
    </div>
  );
};