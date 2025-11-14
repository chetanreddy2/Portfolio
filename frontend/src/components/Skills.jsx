import React from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Code, Brain, Users } from 'lucide-react';
import { skills } from '../data/mockData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-[#1a1c1b] px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-[#d9fb06] mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Technical Skills */}
          <Card className="bg-[#0f0f10] border-white/10 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-[#d9fb06]" size={28} />
              <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-[#1a1c1b] text-gray-300 border border-white/10 hover:border-[#d9fb06] hover:text-[#d9fb06] transition-colors px-4 py-2 text-sm"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-[#0f0f10] border-white/10 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-[#d9fb06]" size={28} />
              <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-[#1a1c1b] text-gray-300 border border-white/10 hover:border-[#d9fb06] hover:text-[#d9fb06] transition-colors px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
