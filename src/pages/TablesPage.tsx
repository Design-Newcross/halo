import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { TableSection } from '../screens/AllStatuses/sections/TableSection';

export const TablesPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Tables" 
        description="Data table with pagination and controls"
        icon="📊"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <TableSection />
      </div>
    </div>
  );
};