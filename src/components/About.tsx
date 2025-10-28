
import React from 'react';
import { Book, Calendar, Award, Hexagon, Building, Briefcase } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const About = () => {
  const education = [
    {
      year: "2017-2021",
      title: "Bachelor's in Electronics and Communication Engineering",
      institution: "Jawaharlal Nehru Technological University Kakinada",
      description: "Foundation in engineering principles and technology"
    },
    {
      year: "2023-2025",
      title: "Master's in Computer Science",
      institution: "Florida Atlantic University",
      description: "Advanced studies in computer science and cloud technologies"
    }
  ];

  const experience = [
    {
      year: "June 2025 - Present",
      title: "AI Intern",
      Company: "Cogent Integrated Bussiness Solutions Inc.",
      type: "Internship · On-site",
      description: "Developed FoodyBuddy AI chatbot using Ollama for local LLM inference, Node.js backend with RESTful APIs, and React 19 frontend, enabling intelligent food recommendations with enhanced privacy and real-time conversational capabilities.",
      responsibilities: [
        "Developed FoodyBuddy AI chatbot using Ollama (local LLM), Node.js backend, and React 19 frontend, enabling intelligent food recommendations with enhanced data privacy.",
        "Built RESTful APIs with Node.js/Express.js to integrate Ollama AI models for natural language processing.",
        "Created responsive, modern UI using React 19 with efficient state management and real-time chat capabilities.",
        "Optimized local AI model deployment with Ollama, reducing API costs and improving response latency.",
        "Implemented full-stack solution with prompt engineering, context management, and error handling.",
        "Technologies: Node.js, React 19, Ollama, JavaScript, REST APIs, LLM integration."
      ]
    },
    {
      year: "Jan 2022 - Aug 2023",
      title: "Cloud Engineer",
      institution: "HCLTech",
      type: "Full-time",
      duration: "1 yr 8 mos",
      description: "Collaborated with stakeholders to gather requirements and create detailed specifications and inventory documentation for FSx ONTAP volume migrations in Confluence.",
      responsibilities: [
        "Scheduled and conducted meetings with Subject Matter Experts (SMEs) to review and approve migration plans.",
        "Raised and managed storage requests with the infrastructure team for volume creation.",
        "Configured and mounted FSx ONTAP volumes to EC2 instances using Linux commands, ensuring seamless integration and functionality.",
        "Facilitated communication between teams to streamline the migration process from on-premise to AWS Cloud."
      ],
      skills: ["Amazon EC2", "Amazon VPC", "Amazon S3", "IAM", "Terraform", "MySQL", "Cloud Services"]
    },
    {
      year: "Aug 2020 - May 2021",
      title: "Web Development Intern",
      institution: "Star Wall Interio",
      type: "Internship · Hybrid",
      duration: "10 mos",
      description: "Assisted the design and marketing team in enhancing the website for Star Wall Interio.",
      responsibilities: [
        "Assist the design and marketing team in enhancing the website, including UI/UX improvements, content updates, and design integration.",
        "Collaborate with the team to develop new features for the website, ensuring it is functional, responsive, and visually appealing.",
        "Help optimize the website for SEO and improve user experience.",
        "Ensure the website aligns with the brand identity and digital marketing goals."
      ],
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services", 
      date: "2023",
      status: "Active",
      description: "AWS Certified Cloud Practitioner with a strong foundation in AWS core services, cloud concepts, billing, and security best practices",
      color: "bg-orange-500"
    },
     {
      title: "Oracle Certified AI Foundations Associate",
      issuer: "Oracle", 
      date: "2025",
      status: "Active",
      description: "OCI AI Foundations Associate with strong understanding of Oracle Cloud AI services, ML fundamentals, generative AI, and AI infrastructure deployment.",
      image: "public/OCI25AICFA.jpeg",
    },

    
    {
      title: "Python Foundation Certificate",
      issuer: "Infosys SpringBoard", 
      date: "2025",
      status: "Active",
      description: "Skilled in Python fundamentals including data types, control structures, functions, file handling, and object-oriented programming.",
      color: "bg-blue-500"
    },
    {
      title: "Software Engineer Intern",
      issuer: "Hacker Rank", 
      date: "2025",
      status: "Active",
      description: "Completed the HackerRank Software Engineer Intern course, gaining hands-on experience in data structures, algorithms, and real-world coding challenges.",
      color: "bg-green-500"
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services", 
      date: "2025",
      status: "Active",
      description: "Completed AWS Cloud Technical Essentials, gaining hands-on knowledge of core AWS services, cloud architecture, and deployment best practices.",
      color: "bg-orange-500"
    },
    {
      title: "Career Essentials in Github Professional Certificate",
      issuer: "Github", 
      date: "2025",
      status: "Active",
      description: "Completed the Career Essentials in GitHub Professional Certificate, gaining practical skills in version control, Git, GitHub workflows, and collaboration best practices for software development.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            I'm a cloud computing and AI professional with a Master's in Computer Science from Florida Atlantic University and 3+ years of experience in AWS, Terraform, Python, and AI development. I've built impactful projects including cloud infrastructure automation and AI-powered applications like FoodyBuddy chatbot using Ollama, Node.js, and React 19.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            I'm transitioning into DevOps and AI Engineering roles, specializing in CI/CD pipelines, infrastructure automation, Kubernetes, and developing intelligent applications with local LLMs. I'm passionate about combining cloud automation with artificial intelligence to create scalable, innovative solutions that drive business value.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm seeking opportunities to apply my DevOps and AI expertise in a forward-thinking environment that values automation, innovation, and cutting-edge technology. Let's build something amazing together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="education" className="flex items-center gap-2">
                <Book size={16} />
                Education
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase size={16} />
                Experience
              </TabsTrigger>
              <TabsTrigger value="certifications" className="flex items-center gap-2">
                <Award size={16} />
                Certifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="mt-0">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                
                {education.map((item, index) => (
                  <div key={index} className="relative flex items-center mb-12 last:mb-0">
                    <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>
                    
                    <div className="ml-20 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                      <div className="flex items-center mb-3">
                        <Book className="text-blue-500 mr-2" size={20} />
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <h4 className="text-lg text-blue-600 font-medium mb-3">{item.institution}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience" className="mt-0">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                
                {experience.map((item, index) => (
                  <div key={index} className="relative flex items-start mb-16 last:mb-0">
                    <div className="absolute left-6 w-4 h-4 bg-white border-4 border-purple-500 rounded-full shadow-lg mt-2"></div>
                    
                    <div className="ml-20 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500 w-full">
                      <div className="flex items-center mb-3">
                        <Calendar className="text-purple-500 mr-2" size={20} />
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                          {item.year}
                        </span>
                        <span className="ml-2 text-sm text-gray-500">· {item.duration}</span>
                      </div>
                      
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                          <div className="flex items-center">
                            <Building size={16} className="text-gray-500 mr-2" />
                            <h4 className="text-lg text-purple-600 font-medium">{item.institution}</h4>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{item.type}</p>
                        </div>
                        
                        {item.skills && (
                          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                            {item.skills.map((skill, skillIdx) => (
                              <span 
                                key={skillIdx} 
                                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      
                      {item.responsibilities && (
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h5>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            {item.responsibilities.map((resp, respIdx) => (
                              <li key={respIdx}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certifications" className="mt-0">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications</h3>
                
                <TooltipProvider>
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    {certifications.map((cert, index) => (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <div className="cursor-pointer transform hover:scale-110 transition-transform duration-200">
                            <div className="relative w-16 h-16">
                              {/* Hexagonal badge background */}
                              <div className={`w-full h-full ${cert.color} transform rotate-0`} 
                                   style={{
                                     clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                                   }}>
                              </div>
                              {/* Inner content */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-xs font-bold text-center leading-tight">
                                  {cert.issuer === "Amazon Web Services" ? "AWS" : 
                                   cert.issuer === "Github" ? "GH" :
                                   cert.issuer === "Hacker Rank" ? "HR" :
                                   cert.issuer === "Infosys SpringBoard" ? "PY" : "CERT"}
                                </div>
                              </div>
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-semibold">{cert.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <Award className="text-purple-500 mr-3" size={24} />
                        <div>
                          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            {cert.date}
                          </span>
                          <div className="flex items-center mt-1">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              cert.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {cert.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <h4 className="text-md text-purple-600 font-medium mb-3">{cert.issuer}</h4>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
