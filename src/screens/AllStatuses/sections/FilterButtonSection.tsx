import React from "react";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { FilterIcon } from "lucide-react";

export const FilterButtonSection = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <Button variant="outline" className="inline-flex min-w-8 min-h-8 items-center justify-center gap-2 px-2 py-1 bg-white rounded-lg border border-solid border-[#b9b9bc]">
          <FilterIcon className="w-3.5 h-3.5" />
          <span className="flex-1 font-body-p2-action-regular text-[#002858]">Label</span>
          <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#002858] rounded-full">
            <span className="text-neutral-100 text-xs font-body-p3-strong">9</span>
          </Badge>
        </Button>
        <Button className="inline-flex min-w-8 min-h-8 items-center justify-center gap-2 px-2 py-1 bg-[#28e9c6] rounded-lg">
          <FilterIcon className="w-3.5 h-3.5" />
          <span className="flex-1 font-body-p2-action text-[#002858]">Label</span>
          <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#002858] rounded-full">
            <span className="text-neutral-100 text-xs font-body-p3-strong">9</span>
          </Badge>
        </Button>
      </div>
      <div className="space-y-4">
        <Button variant="outline" className="inline-flex min-w-8 min-h-8 items-center justify-center gap-2 px-2 py-1 bg-white rounded-lg border border-solid border-[#d0d0d2]" disabled>
          <FilterIcon className="w-3.5 h-3.5" />
          <span className="flex-1 font-body-p2-action-regular text-[#898b8f]">Label</span>
          <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#e8e8e9] rounded-full">
            <span className="text-[#898b8f] text-xs font-body-p3-strong">9</span>
          </Badge>
        </Button>
        <Button className="inline-flex min-w-8 min-h-8 items-center justify-center gap-2 px-2 py-1 bg-[#e8e8e9] rounded-lg border border-solid border-[#d0d0d2]" disabled>
          <FilterIcon className="w-3.5 h-3.5" />
          <span className="flex-1 font-body-p2-action-regular text-[#898b8f]">Label</span>
          <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#d0d0d2] rounded-full">
            <span className="text-[#898b8f] text-xs font-body-p3-strong">9</span>
          </Badge>
        </Button>
      </div>
    </div>
  );
};