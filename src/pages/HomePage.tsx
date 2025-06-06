import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { AllStatuses } from '../screens/AllStatuses/AllStatuses';

export const HomePage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="All Components" 
        description="Complete overview of all component variations and states"
        icon="🍄"
      />
      <AllStatuses />
    </div>
  );
};