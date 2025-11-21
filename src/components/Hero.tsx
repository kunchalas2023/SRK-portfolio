
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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-slate-50 dark:bg-slate-950">
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-16">
        
          {/* Profile Photo */}
          <div className="flex-shrink-0 lg:order-2">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative">
              <img 
                src="/SRK-portfolio/lovable-uploads/2d2fc46b-8f61-4672-a8dc-6d704624d687.png" 
                alt="Siva Rama Krishna Reddy"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white dark:border-slate-800"
              />
            </div>
          </div>
        
          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:order-1">
            {/* Professional Title */}
            <div className="mb-4">
              <p className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                Professional Profile
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-lg md:text-xl text-slate-700 dark:text-slate-300">
                <span>{displayText}</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-slate-50">
              Siva Rama Krishna Reddy
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed text-slate-700 dark:text-slate-300 mx-auto lg:mx-0">
              DevOps and AI Engineer with <span className="font-semibold text-slate-900 dark:text-slate-100">3+ years</span> of experience in cloud automation and intelligent systems. 
              Specializing in CI/CD pipelines, infrastructure management with Terraform/AWS/Kubernetes, and AI application development.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {['AWS Cloud', 'Google Cloud', 'AI Applications', 'Terraform', 'Cloud Security', 'Automation', 'Scalability'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <ArrowDown className="text-slate-400 dark:text-slate-600 animate-bounce" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
