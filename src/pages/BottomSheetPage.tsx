import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { BottomSheetSection } from '../screens/AllStatuses/sections/BottomSheetSection';

export const BottomSheetPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Bottom Sheet" 
        description="Bottom sheet modal component"
        icon="📋"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <BottomSheetSection />
      </div>
    </div>
  );
};