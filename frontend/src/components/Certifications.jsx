import React from 'react';
import { Card } from './ui/card';
import { Award } from 'lucide-react';
import { certifications } from '../data/mockData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-[#0f0f10] px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-[#60a5fa] mx-auto"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-[#1a1c1b] border-white/10 p-6 hover:border-[#60a5fa]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#60a5fa]/10 flex items-center justify-center mb-4">
                  <Award className="text-[#60a5fa]" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.year}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
