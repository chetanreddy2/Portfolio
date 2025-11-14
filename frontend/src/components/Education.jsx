import React from 'react';
import { Card } from './ui/card';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/mockData';

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-[#1a1c1b] px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-[#60a5fa] mx-auto"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-[#0f0f10] border-white/10 p-8 hover:border-[#60a5fa]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#60a5fa]/10 flex items-center justify-center">
                    <GraduationCap className="text-[#60a5fa]" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                    <span className="text-gray-500">{edu.duration}</span>
                    <span className="hidden sm:inline text-gray-600">•</span>
                    <span className="text-[#60a5fa] font-semibold">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
