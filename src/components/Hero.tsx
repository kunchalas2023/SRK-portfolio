
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Python Developer', 'Data Engineer'];
  
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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '6s' }}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12 animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Particle effect overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="animate-fade-in flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-6xl mx-auto">
        
      {/* Profile Photo - Much smaller size and reduced border */}
<div className="flex-shrink-0 mb-8 lg:mb-0 lg:order-2 lg:ml-12">
  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 relative mx-auto">
    <div className="group relative">
      <img 
        src="/SRK-portfolio/lovable-uploads/2d2fc46b-8f61-4672-a8dc-6d704624d687.png" 
        alt="Siva Rama Krishna Reddy"
        className="w-full h-full object-cover shadow-2xl transition duration-300 transform group-hover:scale-105"
        style={{ borderRadius: '0.5rem' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
    </div>
  </div>
</div>
        
          {/* Left side content */}
          <div className="flex-1 text-center lg:text-left lg:order-1">
            {/* Animated Professional Title */}
            <div className="mb-6">
              <div className="text-base md:text-lg lg:text-xl text-blue-300 font-medium h-6 md:h-7 flex items-center justify-center lg:justify-start">
                <span className="mr-1">I'm a</span>
                <span className="text-green-400 font-semibold min-w-[160px] md:min-w-[200px]">
                  {displayText}
                  <span className="animate-pulse text-green-300">|</span>
                </span>
              </div>
              <div className="flex justify-center lg:justify-start mt-2">
                <div className="w-24 md:w-32 h-0.5 bg-gradient-to-r from-green-400 to-green-600 animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              Hello I'm Siva
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl mb-8 max-w-3xl leading-relaxed text-gray-100 backdrop-blur-sm bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10 mx-auto lg:mx-0">
              I'm a Python Developer and AWS Cloud Engineer with <span className="text-blue-400 font-semibold">4 years</span> of experience in the industry, 
              excelling in designing, deploying, and managing cloud infrastructure. 
              Proficient in AWS and Google Cloud, emphasizing automation, scalability, and security.
            </p>
            
            <div className="flex flex-wrap gap-2 md:gap-4 mb-8 justify-center lg:justify-start">
              {['AWS Cloud', 'Google Cloud', 'Terraform', 'Cloud Security', 'Automation', 'Scalability'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-3 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="animate-bounce flex justify-center lg:justify-start">
              <ArrowDown className="text-blue-400 drop-shadow-lg" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
