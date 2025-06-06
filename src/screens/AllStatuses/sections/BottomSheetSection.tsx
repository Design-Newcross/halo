import React from "react";

export const BottomSheetSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[375px] h-[667px] items-center justify-end bg-[#00000080]">
      <div className="flex flex-col items-start relative self-stretch w-full">
        <div className="flex flex-col items-center justify-center px-0 py-4 relative self-stretch w-full bg-white rounded-t-lg overflow-hidden">
          <div className="relative w-[50px] h-1 bg-[#d0d0d2] rounded-full" />
        </div>
        <div className="flex flex-col items-center gap-2 pt-0 pb-4 px-4 relative self-stretch w-full bg-white">
          <div className="flex flex-col items-start gap-2 px-0 py-2 relative self-stretch w-full">
            <div className="flex flex-col items-start relative self-stretch w-full">
              <div className="flex w-[311px] items-center gap-2 relative">
                <h2 className="flex-1 mt-[-1.00px] font-headers-h2 text-[#002858]">
                  Bottom Sheet Title
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 relative self-stretch w-full">
              <div className="flex flex-col w-[343px] items-center justify-center relative">
                <div className="flex flex-col items-center justify-center p-2 relative self-stretch w-full bg-[#7b61ff26] rounded-lg border border-dashed border-[#7b61ff]">
                  <img className="relative w-4 h-4" alt="Union" src="/union.svg" />
                  <h3 className="relative self-stretch font-headers-h3 text-[#7b61ff] text-center">
                    Top Section (not Scrollable): Swap Me For Local Component
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch w-full gap-2 relative">
            <div className="h-[83px] flex flex-col items-center justify-center relative self-stretch w-full">
              <div className="flex-1 grow flex flex-col items-center justify-center p-2 relative self-stretch w-full bg-[#7b61ff26] rounded-lg border border-dashed border-[#7b61ff]">
                <img className="relative w-4 h-4" alt="Union" src="/union.svg" />
                <h3 className="relative self-stretch font-headers-h3 text-[#7b61ff] text-center">
                  Content (scrollable): Swap Me For Local Component
                </h3>
              </div>
            </div>
          </div>
          <footer className="flex flex-col items-start relative self-stretch w-full bg-transparent">
            <div className="flex flex-col items-center justify-center relative self-stretch w-full">
              <div className="flex flex-col items-center justify-center p-2 relative self-stretch w-full bg-[#7b61ff26] rounded-lg border border-dashed border-[#7b61ff]">
                <img className="relative w-4 h-4" alt="Union" src="/union.svg" />
                <h3 className="relative self-stretch font-headers-h3 text-[#7b61ff] text-center">
                  Footer (not Scrollable): Swap Me For Local Component
                </h3>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};