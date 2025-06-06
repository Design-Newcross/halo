import React, { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { ChevronDownIcon, EyeIcon, EyeOffIcon, CheckCircleIcon, XCircleIcon, AlertCircleIcon } from "lucide-react";

export const FormFieldsSection = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div className="space-y-12">
      {/* Text Inputs */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Text Inputs</h3>
          <p className="text-[#525356] font-body-p2">Standard text input fields with various states</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Default State */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Default State</h4>
            
            <div className="space-y-2">
              <label className="font-headers-h3 text-[#002858]">
                Label <span className="text-[#c80809]">*</span>
              </label>
              <Input 
                className="h-12 rounded-lg border-[#b9b9bc] bg-white text-[#002858] placeholder:text-[#898b8f]"
                placeholder="Placeholder text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <p className="text-[#525356] text-sm px-2">
                Short and supportive help text
              </p>
            </div>
          </div>

          {/* Focused State */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Focused State</h4>
            
            <div className="space-y-2">
              <label className="font-headers-h3 text-[#002858]">
                Label <span className="text-[#c80809]">*</span>
              </label>
              <Input 
                className="h-12 rounded-lg border-[#28e9c6] bg-white text-[#002858] placeholder:text-[#898b8f] ring-2 ring-[#28e9c6] ring-opacity-20"
                placeholder="Placeholder text"
                autoFocus
              />
              <p className="text-[#525356] text-sm px-2">
                Short and supportive help text
              </p>
            </div>
          </div>

          {/* Disabled State */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Disabled State</h4>
            
            <div className="space-y-2">
              <label className="font-headers-h3 text-[#898b8f]">
                Label
              </label>
              <Input 
                className="h-12 rounded-lg border-[#d0d0d2] bg-[#e8e8e9] text-[#898b8f] placeholder:text-[#898b8f] cursor-not-allowed"
                placeholder="Placeholder text"
                disabled
              />
              <p className="text-[#898b8f] text-sm px-2">
                Short and supportive help text
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Error and Success States */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Error & Success States</h3>
          <p className="text-[#525356] font-body-p2">Input validation states with icons and messages</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Error State */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Error State</h4>
            
            <div className="space-y-2">
              <label className="font-headers-h3 text-[#c80809]">
                Label <span className="text-[#c80809]">*</span>
              </label>
              <div className="relative">
                <Input 
                  className="h-12 rounded-lg border-[#c80809] bg-white text-[#002858] placeholder:text-[#898b8f] pr-10"
                  placeholder="User entered text"
                  value="Invalid input"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <XCircleIcon className="w-4 h-4 text-[#c80809]" />
                </div>
              </div>
              <p className="text-[#c80809] text-sm px-2">
                Error message explaining the issue
              </p>
            </div>
          </div>

          {/* Success State */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Success State</h4>
            
            <div className="space-y-2">
              <label className="font-headers-h3 text-[#29853a]">
                Label <span className="text-[#c80809]">*</span>
              </label>
              <div className="relative">
                <Input 
                  className="h-12 rounded-lg border-[#29853a] bg-white text-[#002858] placeholder:text-[#898b8f] pr-10"
                  placeholder="Valid input"
                  value="Valid input text"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <CheckCircleIcon className="w-4 h-4 text-[#29853a]" />
                </div>
              </div>
              <p className="text-[#29853a] text-sm px-2">
                Success message confirming validity
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Password Inputs */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Password Inputs</h3>
          <p className="text-[#525356] font-body-p2">Password fields with visibility toggle and validation</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default Password */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Default Password</h4>
            
            <div className="space-y-2">
              <label className="font-headers-h3 text-[#002858]">
                Password <span className="text-[#c80809]">*</span>
              </label>
              <div className="relative">
                <Input 
                  type={showPassword ? "text" : "password"}
                  className="h-12 rounded-lg border-[#b9b9bc] bg-white text-[#002858] pr-10"
                  placeholder="Enter password"
                  value="password123"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#525356] hover:text-[#002858] transition-colors"
                >
                  {showPassword ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                </button>
              </div>
              <div className="space-y-1 px-2">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-[#29853a]" />
                  <p className="text-[#29853a] text-sm">8 characters</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#525356]" />
                  <p className="text-[#525356] text-sm">Two uppercase (A-Z)</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-[#29853a]" />
                  <p className="text-[#29853a] text-sm">Two numbers (0-9)</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#525356]" />
                  <p className="text-[#525356] text-sm">Two special characters (?!-.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Error Password */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Error Password</h4>
            
            <div className="space-y-2">
              <label className="font-headers-h3 text-[#c80809]">
                Password <span className="text-[#c80809]">*</span>
              </label>
              <div className="relative">
                <Input 
                  type={showPasswordError ? "text" : "password"}
                  className="h-12 rounded-lg border-[#c80809] bg-white text-[#002858] pr-16"
                  placeholder="Enter password"
                  value="weak123"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <AlertCircleIcon className="w-4 h-4 text-[#c80809]" />
                  <button
                    type="button"
                    onClick={() => setShowPasswordError(!showPasswordError)}
                    className="text-[#525356] hover:text-[#002858] transition-colors"
                  >
                    {showPasswordError ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="space-y-1 px-2">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-[#29853a]" />
                  <p className="text-[#29853a] text-sm">8 characters</p>
                </div>
                <div className="flex items-center gap-2">
                  <XCircleIcon className="w-3.5 h-3.5 text-[#c80809]" />
                  <p className="text-[#c80809] text-sm">Two uppercase (A-Z)</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-[#29853a]" />
                  <p className="text-[#29853a] text-sm">Two numbers (0-9)</p>
                </div>
                <div className="flex items-center gap-2">
                  <XCircleIcon className="w-3.5 h-3.5 text-[#c80809]" />
                  <p className="text-[#c80809] text-sm">Two special characters (?!-.)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Number Input */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Phone Number Input</h3>
          <p className="text-[#525356] font-body-p2">Phone input with country code selector</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Default Phone */}
          <div className="space-y-2">
            <label className="font-headers-h3 text-[#002858]">
              Phone Number <span className="text-[#c80809]">*</span>
            </label>
            <div className="flex h-12 items-center gap-2 px-4 py-2 rounded-lg border border-[#b9b9bc] bg-white">
              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5 object-cover rounded-sm"
                  alt="United Kingdom"
                  src="/united-kingdom-2-2.png"
                />
                <ChevronDownIcon className="w-4 h-4 text-[#525356]" />
                <div className="w-px h-5 bg-[#b9b9bc]" />
              </div>
              <input
                type="tel"
                className="flex-1 bg-transparent text-[#002858] placeholder:text-[#898b8f] outline-none font-body-p1"
                placeholder="+44 1234 123456"
              />
            </div>
            <p className="text-[#525356] text-sm px-2">
              Short and supportive help text
            </p>
          </div>

          {/* Disabled Phone */}
          <div className="space-y-2">
            <label className="font-headers-h3 text-[#898b8f]">
              Phone Number
            </label>
            <div className="flex h-12 items-center gap-2 px-4 py-2 rounded-lg border border-[#d0d0d2] bg-[#e8e8e9]">
              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5 object-cover rounded-sm opacity-50"
                  alt="United Kingdom"
                  src="/united-kingdom-2-2.png"
                />
                <ChevronDownIcon className="w-4 h-4 text-[#898b8f]" />
                <div className="w-px h-5 bg-[#d0d0d2]" />
              </div>
              <input
                type="tel"
                className="flex-1 bg-transparent text-[#898b8f] placeholder:text-[#898b8f] outline-none font-body-p1 cursor-not-allowed"
                placeholder="+44 1234 123456"
                disabled
              />
            </div>
            <p className="text-[#898b8f] text-sm px-2">
              Short and supportive help text
            </p>
          </div>

          {/* Error Phone */}
          <div className="space-y-2">
            <label className="font-headers-h3 text-[#c80809]">
              Phone Number <span className="text-[#c80809]">*</span>
            </label>
            <div className="flex h-12 items-center gap-2 px-4 py-2 rounded-lg border border-[#c80809] bg-white">
              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5 object-cover rounded-sm"
                  alt="United Kingdom"
                  src="/united-kingdom-2-2.png"
                />
                <ChevronDownIcon className="w-4 h-4 text-[#525356]" />
                <div className="w-px h-5 bg-[#b9b9bc]" />
              </div>
              <input
                type="tel"
                className="flex-1 bg-transparent text-[#002858] placeholder:text-[#898b8f] outline-none font-body-p1"
                value="+44"
              />
              <XCircleIcon className="w-4 h-4 text-[#c80809]" />
            </div>
            <p className="text-[#c80809] text-sm px-2">
              Please enter a valid phone number
            </p>
          </div>
        </div>
      </div>

      {/* Select Inputs */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Select Inputs</h3>
          <p className="text-[#525356] font-body-p2">Dropdown select fields with various states</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Default Select */}
          <div className="space-y-2">
            <label className="font-headers-h3 text-[#002858]">
              Select Option <span className="text-[#c80809]">*</span>
            </label>
            <Select>
              <SelectTrigger className="h-12 rounded-lg border-[#b9b9bc] bg-white">
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-[#525356] text-sm px-2">
              Short and supportive help text
            </p>
          </div>

          {/* Disabled Select */}
          <div className="space-y-2">
            <label className="font-headers-h3 text-[#898b8f]">
              Select Option
            </label>
            <Select disabled>
              <SelectTrigger className="h-12 rounded-lg border-[#d0d0d2] bg-[#e8e8e9] text-[#898b8f] cursor-not-allowed">
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
            </Select>
            <p className="text-[#898b8f] text-sm px-2">
              Short and supportive help text
            </p>
          </div>

          {/* Error Select */}
          <div className="space-y-2">
            <label className="font-headers-h3 text-[#c80809]">
              Select Option <span className="text-[#c80809]">*</span>
            </label>
            <div className="relative">
              <Select>
                <SelectTrigger className="h-12 rounded-lg border-[#c80809] bg-white pr-10">
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <XCircleIcon className="w-4 h-4 text-[#c80809]" />
              </div>
            </div>
            <p className="text-[#c80809] text-sm px-2">
              Please select a valid option
            </p>
          </div>
        </div>
      </div>

      {/* Textarea */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Textarea</h3>
          <p className="text-[#525356] font-body-p2">Multi-line text input with character count</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Default Textarea */}
          <div className="space-y-2">
            <label className="font-headers-h3 text-[#002858]">
              Message <span className="text-[#c80809]">*</span>
            </label>
            <Textarea 
              className="h-32 rounded-lg border-[#b9b9bc] bg-white text-[#002858] placeholder:text-[#898b8f] resize-none"
              placeholder="Enter your message here..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              maxLength={300}
            />
            <div className="flex items-center justify-between px-2">
              <p className="text-[#525356] text-sm">
                Short and supportive help text
              </p>
              <span className="text-[#525356] text-xs font-body-p3">
                {textareaValue.length}/300
              </span>
            </div>
          </div>

          {/* Disabled Textarea */}
          <div className="space-y-2">
            <label className="font-headers-h3 text-[#898b8f]">
              Message
            </label>
            <Textarea 
              className="h-32 rounded-lg border-[#d0d0d2] bg-[#e8e8e9] text-[#898b8f] placeholder:text-[#898b8f] resize-none cursor-not-allowed"
              placeholder="Enter your message here..."
              disabled
            />
            <div className="flex items-center justify-between px-2">
              <p className="text-[#898b8f] text-sm">
                Short and supportive help text
              </p>
              <span className="text-[#898b8f] text-xs font-body-p3">
                0/300
              </span>
            </div>
          </div>

          {/* Error Textarea */}
          <div className="space-y-2">
            <label className="font-headers-h3 text-[#c80809]">
              Message <span className="text-[#c80809]">*</span>
            </label>
            <Textarea 
              className="h-32 rounded-lg border-[#c80809] bg-white text-[#002858] placeholder:text-[#898b8f] resize-none"
              placeholder="Enter your message here..."
              value="This message is too short and needs more content to meet the minimum requirements."
            />
            <div className="flex items-center justify-between px-2">
              <p className="text-[#c80809] text-sm">
                Message must be at least 50 characters
              </p>
              <span className="text-[#c80809] text-xs font-body-p3">
                85/300
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] rounded-xl p-8 border border-[#d0d0d2]">
        <h3 className="font-headers-h3 text-[#002858] mb-6">Form Field Guidelines</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#002858]">✅ Best Practices</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Use clear, descriptive labels</li>
              <li>• Provide helpful placeholder text</li>
              <li>• Show validation states clearly</li>
              <li>• Include supportive help text</li>
              <li>• Ensure proper focus states</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#c80809]">❌ Avoid</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Unclear or missing labels</li>
              <li>• Poor error message placement</li>
              <li>• Inconsistent field heights</li>
              <li>• Missing required field indicators</li>
              <li>• Poor colour contrast</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-[#b9b9bc]">
          <p className="text-[#525356] font-body-p2">
            <strong className="text-[#002858]">Accessibility:</strong> All form fields include proper labels, ARIA attributes, keyboard navigation support, and AAA contrast ratios. Error states are announced to screen readers with descriptive messages.
          </p>
        </div>
      </div>
    </div>
  );
};