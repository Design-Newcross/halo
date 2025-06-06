import React from "react";

export const TypographySection = (): JSX.Element => {
  return (
    <div className="space-y-12">
      {/* Headers */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Headers</h3>
          <p className="text-[#525356] font-body-p2">Header typography for titles and section headings</p>
        </div>
        
        <div className="space-y-8">
          {/* H1 - Using H2 style as largest available */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <h1 className="font-headers-h2 text-[#002858] text-2xl leading-9">
                Header 1 - Main Page Title
              </h1>
              <span className="text-[#898b8f] font-body-p3 text-xs">24px / 36px</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for main page titles and primary headings</p>
          </div>

          {/* H2 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <h2 className="font-headers-h2 text-[#002858]">
                Header 2 - Section Title
              </h2>
              <span className="text-[#898b8f] font-body-p3 text-xs">20px / 30px</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for section titles and secondary headings</p>
          </div>

          {/* H3 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <h3 className="font-headers-h3 text-[#002858]">
                Header 3 - Subsection Title
              </h3>
              <span className="text-[#898b8f] font-body-p3 text-xs">16px / 24px</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for subsection titles and component headings</p>
          </div>
        </div>
      </div>

      {/* Body Text */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Body Text</h3>
          <p className="text-[#525356] font-body-p2">Body typography for content and interface text</p>
        </div>
        
        <div className="space-y-8">
          {/* Body P1 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <p className="font-body-p1 text-[#002858]">
                Body P1 - Primary body text for main content and descriptions
              </p>
              <span className="text-[#898b8f] font-body-p3 text-xs">16px / 24px</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for primary body text, descriptions, and main content</p>
          </div>

          {/* Body P1 Action */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <p className="font-body-p1-action text-[#002858]">
                Body P1 Action - Interactive text for buttons and actions
              </p>
              <span className="text-[#898b8f] font-body-p3 text-xs">16px / 24px • 600</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for button text, interactive elements, and emphasized content</p>
          </div>

          {/* Body P1 Action Regular */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <p className="font-body-p1-action-regular text-[#002858]">
                Body P1 Action Regular - Regular weight interactive text
              </p>
              <span className="text-[#898b8f] font-body-p3 text-xs">16px / 24px • 400</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for regular weight interactive elements and secondary actions</p>
          </div>

          {/* Body P1 Link */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <p className="font-body-p1-link text-[#002858] underline">
                Body P1 Link - Text links and navigation
              </p>
              <span className="text-[#898b8f] font-body-p3 text-xs">16px / 24px</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for text links, navigation items, and clickable text</p>
          </div>

          {/* Body P2 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <p className="font-body-p2 text-[#525356]">
                Body P2 - Secondary body text for supporting information and help text
              </p>
              <span className="text-[#898b8f] font-body-p3 text-xs">14px / 20px</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for secondary text, help text, and supporting information</p>
          </div>

          {/* Body P2 Action */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <p className="font-body-p2-action text-[#525356]">
                Body P2 Action - Small interactive text for compact buttons
              </p>
              <span className="text-[#898b8f] font-body-p3 text-xs">14px / 20px • 600</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for small buttons, compact interactive elements, and labels</p>
          </div>

          {/* Body P2 Action Regular */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <p className="font-body-p2-action-regular text-[#525356]">
                Body P2 Action Regular - Regular weight small interactive text
              </p>
              <span className="text-[#898b8f] font-body-p3 text-xs">14px / 20px • 400</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for regular weight small interactive elements and secondary labels</p>
          </div>

          {/* Body P3 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <p className="font-body-p3 text-[#898b8f]">
                Body P3 - Small text for captions, metadata, and fine print
              </p>
              <span className="text-[#898b8f] font-body-p3 text-xs">12px / 18px</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for captions, metadata, timestamps, and fine print</p>
          </div>

          {/* Body P3 Strong */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <p className="font-body-p3-strong text-[#898b8f]">
                Body P3 Strong - Small emphasized text for badges and counters
              </p>
              <span className="text-[#898b8f] font-body-p3 text-xs">12px / 18px • 600</span>
            </div>
            <p className="text-[#525356] font-body-p3">Used for badges, counters, small emphasized text, and status indicators</p>
          </div>
        </div>
      </div>

      {/* Text Colours */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Text Colours</h3>
          <p className="text-[#525356] font-body-p2">Colour variations for different text contexts and states</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Colours */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">Primary Colours</h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-body-p1 text-[#002858]">Primary Text</p>
                <span className="font-body-p3 text-[#898b8f]">#002858</span>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-body-p1 text-[#525356]">Secondary Text</p>
                <span className="font-body-p3 text-[#898b8f]">#525356</span>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-body-p1 text-[#898b8f]">Muted Text</p>
                <span className="font-body-p3 text-[#898b8f]">#898b8f</span>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-body-p1 text-[#28e9c6]">Accent Text</p>
                <span className="font-body-p3 text-[#898b8f]">#28e9c6</span>
              </div>
            </div>
          </div>

          {/* State Colours */}
          <div className="space-y-4">
            <h4 className="font-body-p2-action text-[#525356] border-b border-[#d0d0d2] pb-2">State Colours</h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-body-p1 text-[#c80809]">Error Text</p>
                <span className="font-body-p3 text-[#898b8f]">#c80809</span>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-body-p1 text-[#29853a]">Success Text</p>
                <span className="font-body-p3 text-[#898b8f]">#29853a</span>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-body-p1 text-[#184e22]">Success Dark</p>
                <span className="font-body-p3 text-[#898b8f]">#184e22</span>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-body-p1 text-white bg-[#002858] px-2 py-1 rounded">White Text</p>
                <span className="font-body-p3 text-[#898b8f]">#ffffff</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Scale */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Typography Scale</h3>
          <p className="text-[#525356] font-body-p2">Visual hierarchy demonstration with all text sizes</p>
        </div>
        
        <div className="bg-white rounded-lg p-8 border border-[#b9b9bc]">
          <div className="space-y-6">
            <h1 className="font-headers-h2 text-[#002858] text-2xl leading-9">
              The Quick Brown Fox Jumps Over The Lazy Dog
            </h1>
            <h2 className="font-headers-h2 text-[#002858]">
              The Quick Brown Fox Jumps Over The Lazy Dog
            </h2>
            <h3 className="font-headers-h3 text-[#002858]">
              The Quick Brown Fox Jumps Over The Lazy Dog
            </h3>
            <p className="font-body-p1 text-[#002858]">
              The Quick Brown Fox Jumps Over The Lazy Dog
            </p>
            <p className="font-body-p1-action text-[#002858]">
              The Quick Brown Fox Jumps Over The Lazy Dog
            </p>
            <p className="font-body-p2 text-[#525356]">
              The Quick Brown Fox Jumps Over The Lazy Dog
            </p>
            <p className="font-body-p2-action text-[#525356]">
              The Quick Brown Fox Jumps Over The Lazy Dog
            </p>
            <p className="font-body-p3 text-[#898b8f]">
              The Quick Brown Fox Jumps Over The Lazy Dog
            </p>
            <p className="font-body-p3-strong text-[#898b8f]">
              The Quick Brown Fox Jumps Over The Lazy Dog
            </p>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] rounded-xl p-8 border border-[#d0d0d2]">
        <h3 className="font-headers-h3 text-[#002858] mb-6">Typography Guidelines</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#002858]">✅ Best Practices</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Maintain consistent line heights</li>
              <li>• Use appropriate font weights for hierarchy</li>
              <li>• Ensure sufficient colour contrast (AAA)</li>
              <li>• Limit to 3 font weights maximum</li>
              <li>• Use 4px grid system for spacing</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#c80809]">❌ Avoid</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Mixing too many font sizes</li>
              <li>• Poor colour contrast ratios</li>
              <li>• Inconsistent line heights</li>
              <li>• Overusing bold or italic styles</li>
              <li>• Breaking the established hierarchy</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-[#b9b9bc]">
          <p className="text-[#525356] font-body-p2">
            <strong className="text-[#002858]">Font Family:</strong> All typography uses Poppins font family with specific weights and sizes defined in the design system. Line heights are optimised for readability and follow a consistent scale.
          </p>
        </div>
      </div>
    </div>
  );
};