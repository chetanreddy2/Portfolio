import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mockData';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#0f0f10] px-6 pt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-gray-400 font-medium">
            {personalInfo.title}
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-[#d9fb06] text-black hover:bg-[#c4e605] font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-[#d9fb06] text-[#d9fb06] hover:bg-[#d9fb06] hover:text-black font-semibold px-8 py-6 text-base rounded-full transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#d9fb06] transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#d9fb06] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-[#d9fb06] transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
