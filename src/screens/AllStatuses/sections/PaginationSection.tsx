import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export const PaginationSection = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [disabledCurrentPage, setDisabledCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDisabledPageChange = (page: number) => {
    setDisabledCurrentPage(page);
  };

  return (
    <div className="space-y-12">
      {/* Default Pagination */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Default Pagination</h3>
          <p className="text-[#525356] font-body-p2">Standard pagination controls with active and hover states</p>
        </div>
        
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button 
              className="inline-flex min-w-12 min-h-12 items-center justify-center p-2 bg-white rounded-lg border border-solid border-[#b9b9bc] hover:bg-[#f8f9fa] hover:border-[#28e9c6] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="w-5 h-5 text-[#002858]" />
            </button>

            {/* Page Numbers */}
            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`inline-flex min-w-12 min-h-12 items-center justify-center p-2 rounded-lg border border-solid transition-all duration-200 font-body-p1-action ${
                  currentPage === page
                    ? 'bg-[#28e9c6] border-[#28e9c6] text-[#002858]'
                    : 'bg-white border-[#b9b9bc] text-[#002858] hover:bg-[#f8f9fa] hover:border-[#28e9c6]'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button 
              className="inline-flex min-w-12 min-h-12 items-center justify-center p-2 bg-white rounded-lg border border-solid border-[#b9b9bc] hover:bg-[#f8f9fa] hover:border-[#28e9c6] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handlePageChange(Math.min(7, currentPage + 1))}
              disabled={currentPage === 7}
            >
              <ChevronRightIcon className="w-5 h-5 text-[#002858]" />
            </button>
          </div>
        </div>
      </div>

      {/* Disabled Pagination */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Disabled Pagination</h3>
          <p className="text-[#525356] font-body-p2">Pagination in disabled state with muted colours</p>
        </div>
        
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            {/* Previous Button - Disabled */}
            <button 
              className="inline-flex min-w-12 min-h-12 items-center justify-center p-2 bg-white rounded-lg border border-solid border-[#d0d0d2] cursor-not-allowed"
              disabled
            >
              <ChevronLeftIcon className="w-5 h-5 text-[#898b8f]" />
            </button>

            {/* Page Numbers - Disabled */}
            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
              <button
                key={page}
                disabled
                className={`inline-flex min-w-12 min-h-12 items-center justify-center p-2 rounded-lg border border-solid cursor-not-allowed font-body-p1-action ${
                  disabledCurrentPage === page
                    ? 'bg-[#e8e8e9] border-[#d0d0d2] text-[#898b8f]'
                    : 'bg-white border-[#d0d0d2] text-[#898b8f]'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button - Disabled */}
            <button 
              className="inline-flex min-w-12 min-h-12 items-center justify-center p-2 bg-white rounded-lg border border-solid border-[#d0d0d2] cursor-not-allowed"
              disabled
            >
              <ChevronRightIcon className="w-5 h-5 text-[#898b8f]" />
            </button>
          </div>
        </div>
      </div>

      {/* Compact Pagination */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Compact Pagination</h3>
          <p className="text-[#525356] font-body-p2">Smaller pagination for tight spaces and mobile views</p>
        </div>
        
        <div className="flex justify-center">
          <div className="flex items-center gap-1">
            {/* Previous Button - Compact */}
            <button 
              className="inline-flex min-w-10 min-h-10 items-center justify-center p-1.5 bg-white rounded-lg border border-solid border-[#b9b9bc] hover:bg-[#f8f9fa] hover:border-[#28e9c6] transition-all duration-200"
            >
              <ChevronLeftIcon className="w-4 h-4 text-[#002858]" />
            </button>

            {/* Page Numbers - Compact */}
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`inline-flex min-w-10 min-h-10 items-center justify-center p-1.5 rounded-lg border border-solid transition-all duration-200 font-body-p2-action ${
                  page === 2
                    ? 'bg-[#28e9c6] border-[#28e9c6] text-[#002858]'
                    : 'bg-white border-[#b9b9bc] text-[#002858] hover:bg-[#f8f9fa] hover:border-[#28e9c6]'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button - Compact */}
            <button 
              className="inline-flex min-w-10 min-h-10 items-center justify-center p-1.5 bg-white rounded-lg border border-solid border-[#b9b9bc] hover:bg-[#f8f9fa] hover:border-[#28e9c6] transition-all duration-200"
            >
              <ChevronRightIcon className="w-4 h-4 text-[#002858]" />
            </button>
          </div>
        </div>
      </div>

      {/* Pagination with Ellipsis */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Pagination with Ellipsis</h3>
          <p className="text-[#525356] font-body-p2">Pagination with ellipsis for large page counts</p>
        </div>
        
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button 
              className="inline-flex min-w-12 min-h-12 items-center justify-center p-2 bg-white rounded-lg border border-solid border-[#b9b9bc] hover:bg-[#f8f9fa] hover:border-[#28e9c6] transition-all duration-200"
            >
              <ChevronLeftIcon className="w-5 h-5 text-[#002858]" />
            </button>

            {/* First Pages */}
            {[1, 2].map((page) => (
              <button
                key={page}
                className={`inline-flex min-w-12 min-h-12 items-center justify-center p-2 rounded-lg border border-solid transition-all duration-200 font-body-p1-action ${
                  page === 1
                    ? 'bg-[#28e9c6] border-[#28e9c6] text-[#002858]'
                    : 'bg-white border-[#b9b9bc] text-[#002858] hover:bg-[#f8f9fa] hover:border-[#28e9c6]'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Ellipsis */}
            <div className="inline-flex min-w-12 min-h-12 items-center justify-center p-2">
              <span className="text-[#898b8f] font-body-p1">...</span>
            </div>

            {/* Current Page Area */}
            {[8, 9, 10].map((page) => (
              <button
                key={page}
                className={`inline-flex min-w-12 min-h-12 items-center justify-center p-2 rounded-lg border border-solid transition-all duration-200 font-body-p1-action ${
                  page === 9
                    ? 'bg-[#28e9c6] border-[#28e9c6] text-[#002858]'
                    : 'bg-white border-[#b9b9bc] text-[#002858] hover:bg-[#f8f9fa] hover:border-[#28e9c6]'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Ellipsis */}
            <div className="inline-flex min-w-12 min-h-12 items-center justify-center p-2">
              <span className="text-[#898b8f] font-body-p1">...</span>
            </div>

            {/* Last Page */}
            <button className="inline-flex min-w-12 min-h-12 items-center justify-center p-2 rounded-lg border border-solid bg-white border-[#b9b9bc] text-[#002858] hover:bg-[#f8f9fa] hover:border-[#28e9c6] transition-all duration-200 font-body-p1-action">
              50
            </button>

            {/* Next Button */}
            <button 
              className="inline-flex min-w-12 min-h-12 items-center justify-center p-2 bg-white rounded-lg border border-solid border-[#b9b9bc] hover:bg-[#f8f9fa] hover:border-[#28e9c6] transition-all duration-200"
            >
              <ChevronRightIcon className="w-5 h-5 text-[#002858]" />
            </button>
          </div>
        </div>
      </div>

      {/* Pagination with Info */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Pagination with Info</h3>
          <p className="text-[#525356] font-body-p2">Pagination with additional information about results</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Results Info */}
          <div className="text-[#525356] font-body-p2">
            Showing <span className="font-body-p2-action text-[#002858]">1-10</span> of <span className="font-body-p2-action text-[#002858]">97</span> results
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-2">
            <button 
              className="inline-flex min-w-12 min-h-12 items-center justify-center p-2 bg-white rounded-lg border border-solid border-[#b9b9bc] hover:bg-[#f8f9fa] hover:border-[#28e9c6] transition-all duration-200"
            >
              <ChevronLeftIcon className="w-5 h-5 text-[#002858]" />
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`inline-flex min-w-12 min-h-12 items-center justify-center p-2 rounded-lg border border-solid transition-all duration-200 font-body-p1-action ${
                  page === 1
                    ? 'bg-[#28e9c6] border-[#28e9c6] text-[#002858]'
                    : 'bg-white border-[#b9b9bc] text-[#002858] hover:bg-[#f8f9fa] hover:border-[#28e9c6]'
                }`}
              >
                {page}
              </button>
            ))}

            <button 
              className="inline-flex min-w-12 min-h-12 items-center justify-center p-2 bg-white rounded-lg border border-solid border-[#b9b9bc] hover:bg-[#f8f9fa] hover:border-[#28e9c6] transition-all duration-200"
            >
              <ChevronRightIcon className="w-5 h-5 text-[#002858]" />
            </button>
          </div>
        </div>
      </div>

      {/* Simple Pagination */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-headers-h3 text-[#002858]">Simple Pagination</h3>
          <p className="text-[#525356] font-body-p2">Minimal pagination with just previous and next controls</p>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-solid border-[#b9b9bc] hover:bg-[#f8f9fa] hover:border-[#28e9c6] transition-all duration-200 font-body-p1-action text-[#002858]">
            <ChevronLeftIcon className="w-4 h-4" />
            Previous
          </button>

          <div className="text-[#525356] font-body-p2">
            Page <span className="font-body-p2-action text-[#002858]">3</span> of <span className="font-body-p2-action text-[#002858]">10</span>
          </div>

          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-solid border-[#b9b9bc] hover:bg-[#f8f9fa] hover:border-[#28e9c6] transition-all duration-200 font-body-p1-action text-[#002858]">
            Next
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] rounded-xl p-8 border border-[#d0d0d2]">
        <h3 className="font-headers-h3 text-[#002858] mb-6">Pagination Guidelines</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#002858]">✅ Best Practices</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Show current page clearly</li>
              <li>• Provide clear navigation controls</li>
              <li>• Include result information when helpful</li>
              <li>• Use ellipsis for large page counts</li>
              <li>• Ensure touch-friendly button sizes</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-body-p1-action text-[#c80809]">❌ Avoid</h4>
            <ul className="space-y-2 text-[#525356] font-body-p2">
              <li>• Too many page numbers visible</li>
              <li>• Unclear current page indication</li>
              <li>• Missing disabled states</li>
              <li>• Poor mobile responsiveness</li>
              <li>• Inconsistent button sizing</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-[#b9b9bc]">
          <p className="text-[#525356] font-body-p2">
            <strong className="text-[#002858]">Accessibility:</strong> All pagination controls include proper ARIA labels, keyboard navigation support, and clear focus states. Button sizes meet minimum touch target requirements (44px) for mobile accessibility.
          </p>
        </div>
      </div>
    </div>
  );
};