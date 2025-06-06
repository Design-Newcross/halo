import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { CalendarIcon, UserIcon, SettingsIcon, BellIcon } from "lucide-react";

export const TabGroupSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeDisabledTab, setActiveDisabledTab] = useState("disabled1");
  const [activeCompactTab, setActiveCompactTab] = useState("compact1");

  return (
    <div className="space-y-12">
      {/* Default Tab Group */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Default Tab Groups</h3>
          <p className="text-[#525356] font-body-p2">Tab navigation with active states and badges</p>
        </div>
        
        <div className="flex w-full max-w-[592px] items-start gap-2 p-1 bg-white rounded-full border border-[#b9b9bc]">
          <Button 
            onClick={() => setActiveTab("tab1")}
            className={`flex h-10 items-center justify-center gap-2 px-4 py-1 rounded-full flex-1 transition-all duration-200 ${
              activeTab === "tab1" 
                ? 'bg-[#28e9c6] text-[#002858] shadow-sm' 
                : 'bg-transparent text-[#002858] hover:bg-[#f8f9fa]'
            }`}
          >
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              <span className={activeTab === "tab1" ? "font-body-p1-action" : "font-body-p1-action-regular"}>
                Calendar
              </span>
              <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#002858] rounded-full">
                <span className="text-white text-xs font-body-p3-strong">9</span>
              </Badge>
            </div>
          </Button>
          
          <Button 
            onClick={() => setActiveTab("tab2")}
            className={`flex h-10 items-center justify-center gap-2 px-4 py-1 rounded-full flex-1 transition-all duration-200 ${
              activeTab === "tab2" 
                ? 'bg-[#28e9c6] text-[#002858] shadow-sm' 
                : 'bg-transparent text-[#002858] hover:bg-[#f8f9fa]'
            }`}
          >
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span className={activeTab === "tab2" ? "font-body-p1-action" : "font-body-p1-action-regular"}>
                Users
              </span>
            </div>
          </Button>
          
          <Button 
            onClick={() => setActiveTab("tab3")}
            className={`flex h-10 items-center justify-center gap-2 px-4 py-1 rounded-full flex-1 transition-all duration-200 ${
              activeTab === "tab3" 
                ? 'bg-[#28e9c6] text-[#002858] shadow-sm' 
                : 'bg-transparent text-[#002858] hover:bg-[#f8f9fa]'
            }`}
          >
            <div className="flex items-center gap-2">
              <SettingsIcon className="w-4 h-4" />
              <span className={activeTab === "tab3" ? "font-body-p1-action" : "font-body-p1-action-regular"}>
                Settings
              </span>
            </div>
          </Button>
          
          <Button 
            onClick={() => setActiveTab("tab4")}
            className={`flex h-10 items-center justify-center gap-2 px-4 py-1 rounded-full flex-1 transition-all duration-200 ${
              activeTab === "tab4" 
                ? 'bg-[#28e9c6] text-[#002858] shadow-sm' 
                : 'bg-transparent text-[#002858] hover:bg-[#f8f9fa]'
            }`}
          >
            <div className="flex items-center gap-2">
              <BellIcon className="w-4 h-4" />
              <span className={activeTab === "tab4" ? "font-body-p1-action" : "font-body-p1-action-regular"}>
                Alerts
              </span>
              <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#002858] rounded-full">
                <span className="text-white text-xs font-body-p3-strong">3</span>
              </Badge>
            </div>
          </Button>
        </div>
      </div>

      {/* Disabled Tab Group */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Disabled Tab Groups</h3>
          <p className="text-[#525356] font-body-p2">Tab navigation in disabled state</p>
        </div>
        
        <div className="flex w-full max-w-[668px] items-start gap-2 p-1 bg-white rounded-full border border-[#d0d0d2]">
          <Button 
            disabled
            className="flex h-10 items-center justify-center gap-2 px-4 py-1 bg-[#e8e8e9] text-[#898b8f] rounded-full flex-1 cursor-not-allowed"
          >
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              <span className="font-body-p1-action">Calendar</span>
              <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#d0d0d2] rounded-full">
                <span className="text-[#898b8f] text-xs font-body-p3-strong">9</span>
              </Badge>
            </div>
          </Button>
          
          <Button 
            disabled
            className="flex h-10 items-center justify-center gap-2 px-4 py-1 bg-transparent text-[#898b8f] rounded-full flex-1 cursor-not-allowed"
          >
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span className="font-body-p1-action-regular">Users</span>
            </div>
          </Button>
          
          <Button 
            disabled
            className="flex h-10 items-center justify-center gap-2 px-4 py-1 bg-transparent text-[#898b8f] rounded-full flex-1 cursor-not-allowed"
          >
            <div className="flex items-center gap-2">
              <SettingsIcon className="w-4 h-4" />
              <span className="font-body-p1-action-regular">Settings</span>
            </div>
          </Button>
          
          <Button 
            disabled
            className="flex h-10 items-center justify-center gap-2 px-4 py-1 bg-transparent text-[#898b8f] rounded-full flex-1 cursor-not-allowed"
          >
            <div className="flex items-center gap-2">
              <BellIcon className="w-4 h-4" />
              <span className="font-body-p1-action-regular">Alerts</span>
              <Badge className="min-w-5 min-h-5 px-1 py-0 bg-[#e8e8e9] rounded-full">
                <span className="text-[#898b8f] text-xs font-body-p3-strong">3</span>
              </Badge>
            </div>
          </Button>
        </div>
      </div>

      {/* Compact Tab Group */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Compact Tab Groups</h3>
          <p className="text-[#525356] font-body-p2">Smaller tabs for mobile and tight spaces</p>
        </div>
        
        <div className="flex w-full max-w-[400px] items-start gap-1 p-0.5 bg-white rounded-full border border-[#b9b9bc]">
          <Button 
            onClick={() => setActiveCompactTab("compact1")}
            className={`flex h-8 items-center justify-center gap-1.5 px-3 py-0.5 rounded-full flex-1 transition-all duration-200 ${
              activeCompactTab === "compact1" 
                ? 'bg-[#28e9c6] text-[#002858] shadow-sm' 
                : 'bg-transparent text-[#002858] hover:bg-[#f8f9fa]'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span className={`text-xs ${activeCompactTab === "compact1" ? "font-body-p2-action" : "font-body-p2-action-regular"}`}>
                Home
              </span>
            </div>
          </Button>
          
          <Button 
            onClick={() => setActiveCompactTab("compact2")}
            className={`flex h-8 items-center justify-center gap-1.5 px-3 py-0.5 rounded-full flex-1 transition-all duration-200 ${
              activeCompactTab === "compact2" 
                ? 'bg-[#28e9c6] text-[#002858] shadow-sm' 
                : 'bg-transparent text-[#002858] hover:bg-[#f8f9fa]'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <UserIcon className="w-3.5 h-3.5" />
              <span className={`text-xs ${activeCompactTab === "compact2" ? "font-body-p2-action" : "font-body-p2-action-regular"}`}>
                Profile
              </span>
            </div>
          </Button>
          
          <Button 
            onClick={() => setActiveCompactTab("compact3")}
            className={`flex h-8 items-center justify-center gap-1.5 px-3 py-0.5 rounded-full flex-1 transition-all duration-200 ${
              activeCompactTab === "compact3" 
                ? 'bg-[#28e9c6] text-[#002858] shadow-sm' 
                : 'bg-transparent text-[#002858] hover:bg-[#f8f9fa]'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <SettingsIcon className="w-3.5 h-3.5" />
              <span className={`text-xs ${activeCompactTab === "compact3" ? "font-body-p2-action" : "font-body-p2-action-regular"}`}>
                Settings
              </span>
            </div>
          </Button>
        </div>
      </div>

      {/* Tab Content Example */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Tab Content</h3>
          <p className="text-[#525356] font-body-p2">Example of tab content that changes based on active tab</p>
        </div>
        
        <div className="bg-white rounded-lg border border-[#b9b9bc] p-6">
          {activeTab === "tab1" && (
            <div className="space-y-4">
              <h4 className="font-headers-h3 text-[#002858]">📅 Calendar Content</h4>
              <p className="text-[#525356] font-body-p1">
                This is the calendar tab content. Here you would display calendar events, schedules, and date-related information.
              </p>
              <div className="flex items-center gap-2 text-[#28e9c6] font-body-p2">
                <CalendarIcon className="w-4 h-4" />
                <span>9 upcoming events</span>
              </div>
            </div>
          )}
          
          {activeTab === "tab2" && (
            <div className="space-y-4">
              <h4 className="font-headers-h3 text-[#002858]">👥 Users Content</h4>
              <p className="text-[#525356] font-body-p1">
                This is the users tab content. Here you would display user lists, profiles, and user management features.
              </p>
              <div className="flex items-center gap-2 text-[#28e9c6] font-body-p2">
                <UserIcon className="w-4 h-4" />
                <span>Active users online</span>
              </div>
            </div>
          )}
          
          {activeTab === "tab3" && (
            <div className="space-y-4">
              <h4 className="font-headers-h3 text-[#002858]">⚙️ Settings Content</h4>
              <p className="text-[#525356] font-body-p1">
                This is the settings tab content. Here you would display configuration options, preferences, and system settings.
              </p>
              <div className="flex items-center gap-2 text-[#28e9c6] font-body-p2">
                <SettingsIcon className="w-4 h-4" />
                <span>Configuration options</span>
              </div>
            </div>
          )}
          
          {activeTab === "tab4" && (
            <div className="space-y-4">
              <h4 className="font-headers-h3 text-[#002858]">🔔 Alerts Content</h4>
              <p className="text-[#525356] font-body-p1">
                This is the alerts tab content. Here you would display notifications, warnings, and important messages.
              </p>
              <div className="flex items-center gap-2 text-[#28e9c6] font-body-p2">
                <BellIcon className="w-4 h-4" />
                <span>3 new alerts</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Compact Tab Content Example */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Compact Tab Content</h3>
          <p className="text-[#525356] font-body-p2">Content that changes based on compact tab selection</p>
        </div>
        
        <div className="bg-white rounded-lg border border-[#b9b9bc] p-6">
          {activeCompactTab === "compact1" && (
            <div className="space-y-4">
              <h4 className="font-headers-h3 text-[#002858]">🏠 Home Content</h4>
              <p className="text-[#525356] font-body-p1">
                Welcome to the home section! This compact tab shows your dashboard overview and quick access to important features.
              </p>
              <div className="flex items-center gap-2 text-[#28e9c6] font-body-p2">
                <CalendarIcon className="w-4 h-4" />
                <span>Dashboard overview</span>
              </div>
            </div>
          )}
          
          {activeCompactTab === "compact2" && (
            <div className="space-y-4">
              <h4 className="font-headers-h3 text-[#002858]">👤 Profile Content</h4>
              <p className="text-[#525356] font-body-p1">
                This is your profile section. Here you can manage your personal information, preferences, and account settings.
              </p>
              <div className="flex items-center gap-2 text-[#28e9c6] font-body-p2">
                <UserIcon className="w-4 h-4" />
                <span>Personal information</span>
              </div>
            </div>
          )}
          
          {activeCompactTab === "compact3" && (
            <div className="space-y-4">
              <h4 className="font-headers-h3 text-[#002858]">⚙️ Settings Content</h4>
              <p className="text-[#525356] font-body-p1">
                Configure your application settings here. Adjust preferences, notifications, and system configurations.
              </p>
              <div className="flex items-center gap-2 text-[#28e9c6] font-body-p2">
                <SettingsIcon className="w-4 h-4" />
                <span>System preferences</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] rounded-xl p-8 border border-[#d0d0d2]">
        <h3 className="font-headers-h3 text-[#002858] mb-6">Tab Guidelines</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#002858]">✅ Best Practices</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Use clear, descriptive tab labels</li>
              <li>• Maintain consistent tab ordering</li>
              <li>• Show active state clearly</li>
              <li>• Use badges for important counts</li>
              <li>• Ensure touch-friendly sizes</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#c80809]">❌ Avoid</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Too many tabs in one group</li>
              <li>• Unclear or generic labels</li>
              <li>• Inconsistent icon usage</li>
              <li>• Poor mobile responsiveness</li>
              <li>• Missing active state indication</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-[#b9b9bc]">
          <p className="text-[#525356] font-body-p2">
            <strong className="text-[#002858]">Accessibility:</strong> All tabs include proper ARIA labels, keyboard navigation support (arrow keys), and clear focus states. Active tabs are announced to screen readers with proper role attributes.
          </p>
        </div>
      </div>
    </div>
  );
};