import React from "react";
import { HeartIcon } from "lucide-react";

export const HeartIconSection = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="w-6 h-6 bg-[url(/bg.svg)] bg-[100%_100%]">
        <HeartIcon className="w-3.5 h-3.5 absolute top-1 left-[5px]" fill="#ff0000" />
      </div>
      <div className="w-6 h-6 bg-[url(/bg.svg)] bg-[100%_100%]">
        <HeartIcon className="w-3.5 h-3.5 absolute top-1 left-[5px]" fill="#ff0000" />
      </div>
      <div className="w-6 h-6 bg-[url(/bg.svg)] bg-[100%_100%]">
        <HeartIcon className="w-3.5 h-3.5 absolute top-1 left-[5px]" fill="#ff0000" />
      </div>
      <div className="w-6 h-6 bg-[url(/bg.svg)] bg-[100%_100%]">
        <HeartIcon className="w-3.5 h-3.5 absolute top-1 left-[5px]" fill="#ff0000" />
      </div>
    </div>
  );
};