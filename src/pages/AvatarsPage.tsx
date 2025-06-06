import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { AvatarSection } from '../screens/AllStatuses/sections/AvatarSection';

export const AvatarsPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Avatars" 
        description="Avatar components with badges and various states"
        icon="👤"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <AvatarSection />
      </div>
    </div>
  );
};