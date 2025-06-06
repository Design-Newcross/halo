import React from "react";
import { TypographySection } from "./sections/TypographySection";
import { ButtonSection } from "./sections/ButtonSection";
import { LinksSection } from "./sections/LinksSection";
import { FormFieldsSection } from "./sections/FormFieldsSection";
import { CheckboxSection } from "./sections/CheckboxSection";
import { RadioButtonSection } from "./sections/RadioButtonSection";
import { AvatarSection } from "./sections/AvatarSection";
import { TagSection } from "./sections/TagSection";
import { TabGroupSection } from "./sections/TabGroupSection";
import { FilterButtonSection } from "./sections/FilterButtonSection";
import { SwitchSection } from "./sections/SwitchSection";
import { PaginationSection } from "./sections/PaginationSection";
import { ProgressBarSection } from "./sections/ProgressBarSection";
import { HeartIconSection } from "./sections/HeartIconSection";
import { BottomSheetSection } from "./sections/BottomSheetSection";
import { TableSection } from "./sections/TableSection";

export const AllStatuses = (): JSX.Element => {
  return (
    <div className="space-y-12">
      {/* Typography Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          🔤 Typography
        </h2>
        <TypographySection />
      </div>

      {/* Buttons Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          🔘 Buttons
        </h2>
        <ButtonSection />
      </div>

      {/* Links Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          🔗 Links
        </h2>
        <LinksSection />
      </div>

      {/* Form Fields Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          📝 Form Fields
        </h2>
        <FormFieldsSection />
      </div>

      {/* Checkbox Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          ☑️ Checkboxes
        </h2>
        <CheckboxSection />
      </div>

      {/* Radio Button Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          🔘 Radio Buttons
        </h2>
        <RadioButtonSection />
      </div>

      {/* Avatar Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          👤 Avatars
        </h2>
        <AvatarSection />
      </div>

      {/* Tags Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          🏷️ Tags
        </h2>
        <TagSection />
      </div>

      {/* Tab Group */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          📑 Tab Groups
        </h2>
        <TabGroupSection />
      </div>

      {/* Filter Buttons */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          🔍 Filter Buttons
        </h2>
        <FilterButtonSection />
      </div>

      {/* Switches */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          🔄 Switches
        </h2>
        <SwitchSection />
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          📄 Pagination
        </h2>
        <PaginationSection />
      </div>

      {/* Progress Bars */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          📊 Progress Bars
        </h2>
        <ProgressBarSection />
      </div>

      {/* Heart Icons */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          ❤️ Heart Icons
        </h2>
        <HeartIconSection />
      </div>

      {/* Bottom Sheet */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          📋 Bottom Sheet
        </h2>
        <BottomSheetSection />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#b9b9bc]">
        <h2 className="text-xl font-headers-h2 text-[#002858] mb-6 flex items-center gap-2">
          📊 Tables
        </h2>
        <TableSection />
      </div>
    </div>
  );
};