import React from "react";
import { Button } from "../../../components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export const ButtonSection = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Default Large Buttons */}
      <div className="space-y-4">
        <h3 className="font-headers-h3 text-[#002858] mb-4">Default Large</h3>
        
        {/* Primary Default */}
        <Button size="default" className="w-full">
          Default Large
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
        
        {/* Primary Outline */}
        <Button variant="outline" size="default" className="w-full">
          Default Large
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
        
        {/* Disabled Default */}
        <Button size="default" className="w-full" disabled>
          Disabled Large
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
        
        {/* Disabled Outline */}
        <Button variant="outline" size="default" className="w-full" disabled>
          Disabled Large
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>

      {/* Danger & Secondary Buttons */}
      <div className="space-y-4">
        <h3 className="font-headers-h3 text-[#002858] mb-4">Danger & Secondary</h3>
        
        {/* Danger */}
        <Button variant="destructive" size="default" className="w-full">
          Danger Large
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
        
        {/* Secondary */}
        <Button variant="secondary" size="default" className="w-full">
          Secondary Large
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
        
        {/* Ghost */}
        <Button variant="ghost" size="default" className="w-full">
          Ghost Large
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
        
        {/* Link */}
        <Button variant="link" size="default" className="w-full">
          Link Large
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>

      {/* Small Buttons */}
      <div className="space-y-4">
        <h3 className="font-headers-h3 text-[#002858] mb-4">Small Variants</h3>
        
        {/* Small Default */}
        <Button size="sm" className="w-full">
          Default Small
          <ChevronRightIcon className="w-3.5 h-3.5" />
        </Button>
        
        {/* Small Outline */}
        <Button variant="outline" size="sm" className="w-full">
          Outline Small
          <ChevronRightIcon className="w-3.5 h-3.5" />
        </Button>
        
        {/* Small Disabled */}
        <Button size="sm" className="w-full" disabled>
          Disabled Small
          <ChevronRightIcon className="w-3.5 h-3.5" />
        </Button>
        
        {/* Small Danger */}
        <Button variant="destructive" size="sm" className="w-full">
          Danger Small
          <ChevronRightIcon className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Icon Buttons */}
      <div className="space-y-4">
        <h3 className="font-headers-h3 text-[#002858] mb-4">Icon Buttons</h3>
        
        <div className="flex gap-2">
          <Button size="icon">
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
          
          <Button variant="outline" size="icon">
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
          
          <Button variant="destructive" size="icon">
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
          
          <Button size="icon" disabled>
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Large Buttons */}
      <div className="space-y-4">
        <h3 className="font-headers-h3 text-[#002858] mb-4">Large Variants</h3>
        
        {/* Large Default */}
        <Button size="lg" className="w-full">
          Large Button
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
        
        {/* Large Outline */}
        <Button variant="outline" size="lg" className="w-full">
          Large Outline
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
        
        {/* Large Disabled */}
        <Button size="lg" className="w-full" disabled>
          Large Disabled
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
      </div>

      {/* States Demo */}
      <div className="space-y-4">
        <h3 className="font-headers-h3 text-[#002858] mb-4">Interactive States</h3>
        
        <div className="space-y-2 text-sm text-[#525356]">
          <p>• Hover: Darker background</p>
          <p>• Active: Even darker background</p>
          <p>• Focus: Ring outline</p>
          <p>• Disabled: Grey background</p>
        </div>
        
        <Button className="w-full">
          Try Hover & Focus
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};