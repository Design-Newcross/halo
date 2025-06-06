import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PaginationSection } from '../screens/AllStatuses/sections/PaginationSection';

export const PaginationPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Pagination" 
        description="Pagination controls in various states"
        icon="📄"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <PaginationSection />
      </div>
    </div>
  );
};