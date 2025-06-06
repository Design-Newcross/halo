import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { FormFieldsSection } from '../screens/AllStatuses/sections/FormFieldsSection';

export const FormFieldsPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader 
        title="Form Fields" 
        description="Input fields, textareas, selects, and password fields in various states"
        icon="📝"
      />
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <FormFieldsSection />
      </div>
    </div>
  );
};