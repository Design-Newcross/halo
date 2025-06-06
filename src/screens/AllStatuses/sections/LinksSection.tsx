import React from "react";
import { ExternalLinkIcon, ArrowRightIcon, ArrowLeftIcon } from "lucide-react";

export const LinksSection = (): JSX.Element => {
  return (
    <div className="space-y-12">
      {/* Standard Links */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Standard Links</h3>
          <p className="text-[#525356] font-body-p2">Basic link components with various states and icons</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default Links */}
          <div className="space-y-6">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Default States</h4>
            
            <div className="space-y-4">
              {/* Link with right arrow */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-[#002858] underline font-body-p1-link group-hover:text-[#28e9c6] transition-colors duration-200">
                  This is a link
                </span>
                <ArrowRightIcon className="w-4 h-4 text-[#002858] group-hover:text-[#28e9c6] group-hover:translate-x-1 transition-all duration-200" />
              </div>

              {/* Link with left arrow */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <ArrowLeftIcon className="w-4 h-4 text-[#002858] group-hover:text-[#28e9c6] group-hover:-translate-x-1 transition-all duration-200" />
                <span className="text-[#002858] underline font-body-p1-link group-hover:text-[#28e9c6] transition-colors duration-200">
                  This is a link
                </span>
              </div>

              {/* External link */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-[#002858] underline font-body-p1-link group-hover:text-[#28e9c6] transition-colors duration-200">
                  External link
                </span>
                <ExternalLinkIcon className="w-4 h-4 text-[#002858] group-hover:text-[#28e9c6] transition-colors duration-200" />
              </div>

              {/* Plain link */}
              <div className="group cursor-pointer">
                <span className="text-[#002858] underline font-body-p1-link group-hover:text-[#28e9c6] transition-colors duration-200">
                  Plain text link
                </span>
              </div>
            </div>
          </div>

          {/* Disabled Links */}
          <div className="space-y-6">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Disabled States</h4>
            
            <div className="space-y-4">
              {/* Disabled link with right arrow */}
              <div className="flex items-center gap-2 cursor-not-allowed">
                <span className="text-[#898b8f] underline font-body-p1-link">
                  This is a link
                </span>
                <ArrowRightIcon className="w-4 h-4 text-[#898b8f]" />
              </div>

              {/* Disabled link with left arrow */}
              <div className="flex items-center gap-2 cursor-not-allowed">
                <ArrowLeftIcon className="w-4 h-4 text-[#898b8f]" />
                <span className="text-[#898b8f] underline font-body-p1-link">
                  This is a link
                </span>
              </div>

              {/* Disabled external link */}
              <div className="flex items-center gap-2 cursor-not-allowed">
                <span className="text-[#898b8f] underline font-body-p1-link">
                  External link
                </span>
                <ExternalLinkIcon className="w-4 h-4 text-[#898b8f]" />
              </div>

              {/* Disabled plain link */}
              <div className="cursor-not-allowed">
                <span className="text-[#898b8f] underline font-body-p1-link">
                  Plain text link
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Link Sizes */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Link Sizes</h3>
          <p className="text-[#525356] font-body-p2">Different link sizes for various use cases</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Small Links */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Small (14px)</h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-[#002858] underline font-body-p2-action group-hover:text-[#28e9c6] transition-colors duration-200">
                  Small link
                </span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-[#002858] group-hover:text-[#28e9c6] group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </div>

          {/* Default Links */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Default (16px)</h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-[#002858] underline font-body-p1-link group-hover:text-[#28e9c6] transition-colors duration-200">
                  Default link
                </span>
                <ArrowRightIcon className="w-4 h-4 text-[#002858] group-hover:text-[#28e9c6] group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </div>

          {/* Large Links */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Large (20px)</h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-[#002858] underline font-headers-h2 group-hover:text-[#28e9c6] transition-colors duration-200">
                  Large link
                </span>
                <ArrowRightIcon className="w-5 h-5 text-[#002858] group-hover:text-[#28e9c6] group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Link Variants */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Link Variants</h3>
          <p className="text-[#525356] font-body-p2">Different link styles for various contexts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Underlined Links */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Underlined</h4>
            
            <div className="space-y-3">
              <div className="group cursor-pointer">
                <span className="text-[#002858] underline font-body-p1-link group-hover:text-[#28e9c6] transition-colors duration-200">
                  Underlined link
                </span>
              </div>
              
              <div className="group cursor-pointer">
                <span className="text-[#002858] underline font-body-p1-link group-hover:text-[#28e9c6] transition-colors duration-200">
                  Another underlined link
                </span>
              </div>
            </div>
          </div>

          {/* Plain Links */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Plain</h4>
            
            <div className="space-y-3">
              <div className="group cursor-pointer">
                <span className="text-[#002858] font-body-p1-link group-hover:text-[#28e9c6] transition-colors duration-200">
                  Plain link
                </span>
              </div>
              
              <div className="group cursor-pointer">
                <span className="text-[#002858] font-body-p1-link group-hover:text-[#28e9c6] transition-colors duration-200">
                  Another plain link
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] rounded-xl p-8 border border-[#d0d0d2]">
        <h3 className="font-headers-h3 text-[#002858] mb-6">Usage Guidelines</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#002858]">✅ Best Practices</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Use descriptive link text</li>
              <li>• Indicate external links with icons</li>
              <li>• Maintain consistent hover states</li>
              <li>• Ensure sufficient colour contrast</li>
              <li>• Use appropriate link sizes for context</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#c80809]">❌ Avoid</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Generic text like "click here"</li>
              <li>• Too many links in one area</li>
              <li>• Inconsistent link styling</li>
              <li>• Poor colour contrast</li>
              <li>• Missing focus states</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-[#b9b9bc]">
          <p className="text-[#525356] font-body-p2">
            <strong className="text-[#002858]">Accessibility:</strong> All links include proper focus states, keyboard navigation support, and AAA contrast ratios. Hover effects provide clear visual feedback with smooth transitions.
          </p>
        </div>
      </div>
    </div>
  );
};