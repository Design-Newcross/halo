import React, { useState } from "react";
import { Checkbox } from "../../../components/ui/checkbox";

export const CheckboxSection = (): JSX.Element => {
  const [checkboxStates, setCheckboxStates] = useState({
    default: false,
    checked: true,
    indeterminate: false,
    disabled: false,
    disabledChecked: true,
    disabledIndeterminate: false,
    error: false,
    errorChecked: true,
    errorIndeterminate: false,
  });

  const handleCheckboxChange = (key: string, value: boolean) => {
    setCheckboxStates(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-12">
      {/* Standard Checkboxes */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Standard Checkboxes</h3>
          <p className="text-[#525356] font-body-p2">Basic checkbox components with various states</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Default States */}
          <div className="space-y-6">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Default States</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={false}
                  onCheckedChange={(checked) => handleCheckboxChange('default', checked as boolean)}
                  shape="rounded"
                />
                <label className="text-[#002858] font-body-p1 cursor-pointer">
                  Unchecked
                </label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={true}
                  onCheckedChange={(checked) => handleCheckboxChange('checked', checked as boolean)}
                  shape="rounded"
                />
                <label className="text-[#002858] font-body-p1 cursor-pointer">
                  Checked
                </label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox 
                  indeterminate={true}
                  checked={checkboxStates.indeterminate}
                  onCheckedChange={(checked) => handleCheckboxChange('indeterminate', checked as boolean)}
                  shape="rounded"
                />
                <label className="text-[#002858] font-body-p1 cursor-pointer">
                  Indeterminate
                </label>
              </div>
            </div>
          </div>

          {/* Disabled States */}
          <div className="space-y-6">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Disabled States</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={false}
                  disabled
                  shape="rounded"
                />
                <label className="text-[#898b8f] font-body-p1">
                  Disabled Unchecked
                </label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={true}
                  disabled
                  shape="rounded"
                />
                <label className="text-[#898b8f] font-body-p1">
                  Disabled Checked
                </label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox 
                  indeterminate={true}
                  disabled
                  shape="rounded"
                />
                <label className="text-[#898b8f] font-body-p1">
                  Disabled Indeterminate
                </label>
              </div>
            </div>
          </div>

          {/* Error States */}
          <div className="space-y-6">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Error States</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={checkboxStates.error}
                  onCheckedChange={(checked) => handleCheckboxChange('error', checked as boolean)}
                  variant="error"
                  shape="rounded"
                />
                <label className="text-[#c80809] font-body-p1 cursor-pointer">
                  Error Unchecked
                </label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={checkboxStates.errorChecked}
                  onCheckedChange={(checked) => handleCheckboxChange('errorChecked', checked as boolean)}
                  variant="error"
                  shape="rounded"
                />
                <label className="text-[#c80809] font-body-p1 cursor-pointer">
                  Error Checked
                </label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox 
                  indeterminate={true}
                  checked={checkboxStates.errorIndeterminate}
                  onCheckedChange={(checked) => handleCheckboxChange('errorIndeterminate', checked as boolean)}
                  variant="error"
                  shape="rounded"
                />
                <label className="text-[#c80809] font-body-p1 cursor-pointer">
                  Error Indeterminate
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Variations */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Shape Variations</h3>
          <p className="text-[#525356] font-body-p2">Different checkbox shapes for various design needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Square Checkboxes */}
          <div className="space-y-6">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Square</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={false}
                  shape="square"
                />
                <label className="text-[#002858] font-body-p1 cursor-pointer">
                  Square Unchecked
                </label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={true}
                  shape="square"
                />
                <label className="text-[#002858] font-body-p1 cursor-pointer">
                  Square Checked
                </label>
              </div>
            </div>
          </div>

          {/* Rounded Checkboxes */}
          <div className="space-y-6">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Rounded</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={false}
                  shape="rounded"
                />
                <label className="text-[#002858] font-body-p1 cursor-pointer">
                  Rounded Unchecked
                </label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={true}
                  shape="rounded"
                />
                <label className="text-[#002858] font-body-p1 cursor-pointer">
                  Rounded Checked
                </label>
              </div>
            </div>
          </div>

          {/* Circle Checkboxes */}
          <div className="space-y-6">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Circle</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={false}
                  shape="circle"
                />
                <label className="text-[#002858] font-body-p1 cursor-pointer">
                  Circle Unchecked
                </label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox 
                  checked={true}
                  shape="circle"
                />
                <label className="text-[#002858] font-body-p1 cursor-pointer">
                  Circle Checked
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Size Variations */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Size Variations</h3>
          <p className="text-[#525356] font-body-p2">Different checkbox sizes for various use cases</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Small */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Small (20px)</h4>
            
            <div className="flex items-center gap-3">
              <Checkbox 
                checked={true}
                size="sm"
                shape="rounded"
              />
              <label className="text-[#002858] font-body-p2 cursor-pointer">
                Small checkbox
              </label>
            </div>
          </div>

          {/* Default */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Default (24px)</h4>
            
            <div className="flex items-center gap-4">
              <Checkbox 
                checked={true}
                size="default"
                shape="rounded"
              />
              <label className="text-[#002858] font-body-p1 cursor-pointer">
                Default checkbox
              </label>
            </div>
          </div>

          {/* Large */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Large (28px)</h4>
            
            <div className="flex items-center gap-4">
              <Checkbox 
                checked={true}
                size="lg"
                shape="rounded"
              />
              <label className="text-[#002858] font-body-p1 cursor-pointer">
                Large checkbox
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] rounded-xl p-8 border border-[#d0d0d2]">
        <h3 className="font-headers-h3 text-[#002858] mb-6">Usage Guidelines</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#002858]">✅ Best Practices</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Use for multiple selections</li>
              <li>• Provide clear, descriptive labels</li>
              <li>• Group related options together</li>
              <li>• Use indeterminate for partial selections</li>
              <li>• Maintain consistent spacing</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#c80809]">❌ Avoid</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Using for single selections (use radio buttons)</li>
              <li>• Too many options in one group</li>
              <li>• Unclear or ambiguous labels</li>
              <li>• Inconsistent checkbox styles</li>
              <li>• Poor colour contrast</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-[#b9b9bc]">
          <p className="text-[#525356] font-body-p2">
            <strong className="text-[#002858]">Accessibility:</strong> All checkboxes include proper ARIA labels, keyboard navigation support, and AAA contrast ratios. Focus states are clearly visible with ring outlines.
          </p>
        </div>
      </div>
    </div>
  );
};