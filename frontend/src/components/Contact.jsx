import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, Github, Linkedin, Download } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Contact = () => {
  const handleDownloadResume = () => {
    // Mock download - will be replaced with actual file later
    alert('Resume download feature will be implemented with backend');
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#1a1c1b] px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#d9fb06] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <Card className="bg-[#0f0f10] border-white/10 p-8 md:p-12">
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1c1b] border border-white/10 hover:border-[#d9fb06]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#d9fb06]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#d9fb06]" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Email</p>
                  <p className="text-white text-sm truncate">{personalInfo.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1c1b] border border-white/10 hover:border-[#d9fb06]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#d9fb06]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#d9fb06]" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Phone</p>
                  <p className="text-white text-sm">{personalInfo.phone}</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/10">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full sm:w-auto px-6 py-3 rounded-full bg-[#1a1c1b] border border-white/10 hover:border-[#d9fb06] hover:bg-[#1a1c1b] text-gray-300 hover:text-[#d9fb06] transition-all duration-300"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full sm:w-auto px-6 py-3 rounded-full bg-[#1a1c1b] border border-white/10 hover:border-[#d9fb06] hover:bg-[#1a1c1b] text-gray-300 hover:text-[#d9fb06] transition-all duration-300"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Download Resume Button */}
            <div className="pt-6">
              <Button
                onClick={handleDownloadResume}
                className="w-full bg-[#d9fb06] text-black hover:bg-[#c4e605] font-semibold py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
