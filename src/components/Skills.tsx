
import React from 'react';
import { Code, Cloud, Database, Settings, GitBranch, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "GCP", "EC2", "VPC", "IAM", "S3", "Lambda", "CloudWatch", "CloudTrail", "Terraform", "CI/CD", "Cloud Run"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Programming & Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C", "SQL"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Version Control & Collaboration",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "Github", "Github Actions", "Bitbucket"],
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Systems & Tools",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Linux", "Unix", "Windows", "MS-Office"],
      color: "from-orange-500 to-pink-500"
    },
    {
      title: "AI/ML Tools",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Vector Search", "Embeddings", "Ollama", "Huggingface", "Langchain"],
      color: "from-orange-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Expertise in cutting-edge technologies for cloud infrastructure, 
            development, and modern automation solutions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/40 group hover:scale-105"
              >
                <div className={`bg-gradient-to-br ${category.color} p-8 rounded-t-2xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="text-white bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white text-center leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl text-sm font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 cursor-default hover:scale-105 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
