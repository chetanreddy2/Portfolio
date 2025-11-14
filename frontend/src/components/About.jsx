import React from 'react';
import { Card } from './ui/card';
import { personalInfo } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#0f0f10] px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#d9fb06] mx-auto"></div>
        </div>

        {/* Content */}
        <Card className="bg-[#1a1c1b] border-white/10 p-8 md:p-12">
          <p className="text-gray-300 text-lg leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Key Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d9fb06] mb-2">7.5</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d9fb06] mb-2">2+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d9fb06] mb-2">3+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Certifications</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
