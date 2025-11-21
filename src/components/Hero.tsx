
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
      {/* Glassmorphism Background with Vibrant Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-16">
        
          {/* Profile Photo with Glass Effect */}
          <div className="flex-shrink-0 lg:order-2">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-3xl"></div>
              <img 
                src="/SRK-portfolio/lovable-uploads/2d2fc46b-8f61-4672-a8dc-6d704624d687.png" 
                alt="Siva Rama Krishna Reddy"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/20 relative z-10"
              />
            </div>
          </div>
        
          {/* Content with Glassmorphism */}
          <div className="flex-1 text-center lg:text-left lg:order-1">
            {/* Glass Card Container */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
              {/* Professional Title */}
              <div className="mb-6">
                <p className="text-sm md:text-base font-semibold text-white/80 uppercase tracking-wider mb-3">
                  Professional Profile
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-xl md:text-2xl text-white font-medium">
                  <span>{displayText}</span>
                  <span className="animate-pulse text-white/70">|</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Siva Rama Krishna Reddy
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed text-white/90 mx-auto lg:mx-0">
                DevOps and AI Engineer with <span className="font-bold text-white">3+ years</span> of experience in cloud automation and intelligent systems. 
                Specializing in CI/CD pipelines, infrastructure management with Terraform/AWS/Kubernetes, and AI application development.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                {['AWS Cloud', 'Google Cloud', 'AI Applications', 'Terraform', 'Cloud Security', 'Automation', 'Scalability'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/30 shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <ArrowDown className="text-white/70 animate-bounce" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
