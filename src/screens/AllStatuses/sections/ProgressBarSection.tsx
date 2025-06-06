import React from "react";
import { Progress } from "../../../components/ui/progress";
import { FileTextIcon } from "lucide-react";

export const ProgressBarSection = (): JSX.Element => {
  // Progress bar data
  const progressStates = [
    { state: "default", value: 0, label: "Label", labelColor: "#002858", valueLabel: "0%" },
    { state: "default-50", value: 50, label: "Label", labelColor: "#002858", valueLabel: "50%" },
    { state: "default-count", value: 25, label: "Label", labelColor: "#002858", valueLabel: "2/8" },
    { state: "disabled", value: 25, label: "Label", labelColor: "#898b8f", valueLabel: "25%" },
    { state: "disabled-count", value: 25, label: "Label", labelColor: "#898b8f", valueLabel: "2/8" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {progressStates.map((progress, index) => (
        <div key={`progress-${index}`} className="flex flex-col w-[329px] items-start gap-2">
          <div className="flex items-end justify-between relative self-stretch w-full">
            <div className="flex w-16 items-center gap-1">
              <FileTextIcon className="w-4 h-4" />
              <span className={`flex-1 font-headers-h3 text-[${progress.labelColor}]`}>{progress.label}</span>
            </div>
            <span className={`font-body-p2 text-[${progress.labelColor}] whitespace-nowrap`}>{progress.valueLabel}</span>
          </div>
          <Progress className="h-2 w-full" value={progress.value} />
        </div>
      ))}
    </div>
  );
};