import React from "react";
import { Badge } from "../../../components/ui/badge";
import { UserIcon, CircleCheckIcon, XIcon } from "lucide-react";

export const TagSection = (): JSX.Element => {
  // Tag data
  const tagStates = [
    { state: "default", bgColor: "bg-neutral-100", borderColor: "border-[#002858]", textColor: "text-[#002858]", icon: <UserIcon className="w-4 h-4" /> },
    { state: "success", bgColor: "bg-[#e4f7e7]", borderColor: "border-[#184e22]", textColor: "text-[#184e22]", icon: <CircleCheckIcon className="w-4 h-4" /> },
    { state: "disabled", bgColor: "bg-[#e8e8e9]", borderColor: "border-[#d0d0d2]", textColor: "text-[#898b8f]", icon: <UserIcon className="w-4 h-4" /> },
    { state: "disabled-alt", bgColor: "bg-[#d0d0d2]", borderColor: "border-[#d0d0d2]", textColor: "text-[#898b8f]", icon: <UserIcon className="w-4 h-4" /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {tagStates.map((tag, index) => (
        <div key={`tag-${index}`} className="inline-flex items-start">
          <Badge className={`inline-flex items-center gap-2 px-4 py-1 ${tag.bgColor} border ${tag.borderColor} rounded-full`}>
            {tag.icon}
            <span className={`${tag.textColor} font-body-p1-action-regular`}>
              {index === 1 ? "Success" : index === 2 || index === 3 ? "Disabled" : "Default"}
            </span>
            <XIcon className="w-4 h-4" />
          </Badge>
        </div>
      ))}
    </div>
  );
};