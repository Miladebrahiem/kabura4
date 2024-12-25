import React from 'react';

interface FooterContainerProps {
  children: React.ReactNode;
}

export const FooterContainer: React.FC<FooterContainerProps> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {children}
      </div>

      {/* Footer bottom */}
      <div className="bg-quaternary">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="text-white/80 text-sm py-4 text-left">
            <span>Copyright {new Date().getFullYear()} • </span>
            <span>Web design, development & online marketing by </span>
            <a 
              href="https://webticians.nl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Webticians.nl
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};