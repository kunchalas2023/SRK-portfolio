
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['AI Engineer', 'DevOps Engineer'];
  
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Tech Corporate Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        {/* Subtle gradient accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl"></div>
        
        {/* Diagonal accent line */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500/50 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-16">
        
          {/* Profile Photo - Corporate Style */}
          <div className="flex-shrink-0 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <img 
                  src="/SRK-portfolio/lovable-uploads/2d2fc46b-8f61-4672-a8dc-6d704624d687.png" 
                  alt="Siva Rama Krishna Reddy"
                  className="w-full h-full object-cover rounded-2xl border-2 border-blue-500/30"
                />
              </div>
            </div>
          </div>
        
          {/* Content - Corporate Layout */}
          <div className="flex-1 text-center lg:text-left lg:order-1 text-white">
            {/* Professional Title with Corporate Styling */}
            <div className="mb-6">
              <div className="inline-block px-4 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full mb-4">
                <p className="text-xs md:text-sm font-semibold text-blue-300 uppercase tracking-widest">
                  Professional Profile
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl font-medium text-blue-200">
                <span>{displayText}</span>
                <span className="animate-pulse text-blue-400">|</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Siva Rama Krishna Reddy
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 mx-auto lg:mx-0"></div>
            
            <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed text-slate-300 mx-auto lg:mx-0">
              DevOps and AI Engineer with <span className="font-bold text-blue-400">3+ years</span> of experience in cloud automation and intelligent systems. 
              Specializing in CI/CD pipelines, infrastructure management with Terraform/AWS/Kubernetes, and AI application development.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {['AWS Cloud', 'Google Cloud', 'AI Applications', 'Terraform', 'Cloud Security', 'Automation', 'Scalability'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-md text-sm font-medium text-slate-200 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <ArrowDown className="text-blue-400 animate-bounce" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
