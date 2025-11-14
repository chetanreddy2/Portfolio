import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f10] border-t border-white/10 py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} M Chetan Reddy. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            Built with
            <Heart size={14} className="text-[#60a5fa]" fill="currentColor" />
            using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
