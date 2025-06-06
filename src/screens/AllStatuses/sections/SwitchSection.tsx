import React from "react";
import { Switch } from "../../../components/ui/switch";

export const SwitchSection = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <Switch className="inline-flex min-w-[53px] h-8 items-start justify-end p-0.5 bg-[#28e9c6] rounded-full" />
        <Switch className="inline-flex min-w-[53px] h-8 items-start p-0.5 bg-[#d0d0d2] rounded-full" />
        <div className="w-[53px] h-8">
          <div className="relative h-8">
            <div className="absolute w-[53px] h-5 top-1.5 left-0 bg-white rounded-full" />
            <div className="absolute w-8 h-8 top-0 left-[21px] bg-[#28e9c6] rounded-2xl" />
          </div>
        </div>
        <div className="w-[53px] h-8">
          <div className="relative h-8">
            <div className="absolute w-[53px] h-5 top-1.5 left-0 bg-white rounded-full" />
            <div className="absolute w-8 h-8 top-0 left-0 bg-[#d0d0d2] rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <Switch className="inline-flex min-w-[53px] h-8 items-start justify-end p-0.5 bg-[#e8e8e9] rounded-full" disabled />
        <Switch className="inline-flex min-w-[53px] h-8 items-start p-0.5 bg-[#e8e8e9] rounded-full" disabled />
        <div className="w-[53px] h-8">
          <div className="relative h-8">
            <div className="absolute w-[53px] h-5 top-1.5 left-0 bg-[#e8e8e9] rounded-full" />
            <div className="absolute w-8 h-8 top-0 left-[21px] bg-[#d0d0d2] rounded-2xl" />
          </div>
        </div>
        <div className="w-[53px] h-8">
          <div className="relative h-8">
            <div className="absolute w-[53px] h-5 top-1.5 left-0 bg-[#e8e8e9] rounded-full" />
            <div className="absolute w-8 h-8 top-0 left-0 bg-[#d0d0d2] rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};