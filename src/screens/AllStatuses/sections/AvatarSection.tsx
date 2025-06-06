import React from "react";
import { Avatar } from "../../../components/ui/avatar";
import { Badge } from "../../../components/ui/badge";

export const AvatarSection = (): JSX.Element => {
  // Avatar data
  const avatarStates = [
    { state: "default", badge: false },
    { state: "with-badge", badge: true, badgeColor: "#c80809", badgeTextColor: "white" },
    { state: "disabled", badge: true, badgeColor: "#e8e8e9", badgeTextColor: "#898b8f", disabled: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {avatarStates.map((state, index) => (
        <div key={`avatar-${index}`} className="flex w-20 h-20 items-center justify-center relative">
          <Avatar className="w-20 h-20">
            <img
              className="relative flex-1 self-stretch grow"
              alt="Profile"
              src={`/profile${index === 0 ? "-2" : index === 1 ? "-4" : ""}.svg`}
            />
          </Avatar>
          {state.badge && (
            <div className="inline-flex items-start absolute top-0.5 left-[59px]">
              <Badge className={`min-w-5 min-h-5 px-1 py-0 bg-[${state.badgeColor}] rounded-full`}>
                <span className={`text-${state.badgeTextColor} text-xs font-body-p3-strong`}>9</span>
              </Badge>
            </div>
          )}
        </div>
      ))}

      {/* More Avatars */}
      <div className="flex w-20 h-20 items-center justify-center">
        <Avatar className="w-20 h-20">
          <img
            className="relative flex-1 self-stretch grow"
            alt="Profile"
            src="/profile-6.svg"
          />
        </Avatar>
      </div>

      <div className="flex w-20 h-20 items-center justify-center">
        <Avatar className="w-20 h-20">
          <img
            className="relative flex-1 self-stretch grow"
            alt="Profile"
            src="/profile-8.svg"
          />
        </Avatar>
        <div className="inline-flex items-start absolute top-0.5 left-[59px]">
          <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#c80809] rounded-full">
            <span className="text-neutral-100 text-xs font-body-p3-strong">9</span>
          </Badge>
        </div>
      </div>

      <div className="flex w-20 h-20 items-center justify-center">
        <Avatar className="w-20 h-20">
          <img
            className="relative flex-1 self-stretch grow"
            alt="Profile"
            src="/profile-3.svg"
          />
        </Avatar>
        <div className="inline-flex items-start absolute top-0.5 left-[59px]">
          <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#c80809] rounded-full">
            <span className="text-neutral-100 text-xs font-body-p3-strong">9</span>
          </Badge>
        </div>
      </div>

      <div className="flex w-20 h-20 items-center justify-center">
        <Avatar className="w-20 h-20">
          <img
            className="relative flex-1 self-stretch grow"
            alt="Profile"
            src="/profile.svg"
          />
        </Avatar>
      </div>

      <div className="flex w-20 h-20 items-center justify-center">
        <Avatar className="w-20 h-20">
          <img
            className="relative flex-1 self-stretch grow"
            alt="Profile"
            src="/profile-7.svg"
          />
        </Avatar>
        <div className="inline-flex items-start absolute top-0.5 left-[59px]">
          <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#e8e8e9] rounded-full">
            <span className="text-[#898b8f] text-xs font-body-p3-strong">9</span>
          </Badge>
        </div>
      </div>

      <div className="flex w-20 h-20 items-center justify-center">
        <Avatar className="w-20 h-20">
          <img
            className="relative flex-1 self-stretch grow"
            alt="Profile"
            src="/profile-5.svg"
          />
        </Avatar>
        <div className="inline-flex items-start absolute top-0.5 left-[59px]">
          <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#e8e8e9] rounded-full">
            <span className="text-[#898b8f] text-xs font-body-p3-strong">9</span>
          </Badge>
        </div>
      </div>
    </div>
  );
};