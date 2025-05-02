import React, { useState } from 'react';
import AnimatedCard from '../shared/AnimatedCard';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedCard 
      className="relative group h-full"
      delay={index * 100}
    >
      <div 
        className="relative h-full glass-card overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden bg-imperial-purple/10">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-imperial-purple">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
          <p className="text-imperial-purple font-medium mb-3">{member.role}</p>
          
          <div 
            className={`overflow-hidden transition-all duration-500 ${
              isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ maxHeight: isHovered ? '8rem' : '0', overflowY: isHovered ? 'auto' : 'hidden' }}
          >
            <p className="text-gray-600 text-sm mb-4 whitespace-pre-line">{member.bio}</p>
          </div>
          
          <div className="flex space-x-3">
            {member.social.linkedin && (
              <a 
                href={member.social.linkedin}
                className="w-8 h-8 rounded-full bg-imperial-purple/10 flex items-center justify-center text-imperial-purple hover:bg-imperial-purple hover:text-white transition-colors duration-300"
              >
                <Linkedin size={16} />
              </a>
            )}
            {member.social.twitter && (
              <a 
                href={member.social.twitter}
                className="w-8 h-8 rounded-full bg-imperial-purple/10 flex items-center justify-center text-imperial-purple hover:bg-imperial-purple hover:text-white transition-colors duration-300"
              >
                <Twitter size={16} />
              </a>
            )}
            {member.social.email && (
              <a 
                href={`mailto:${member.social.email}`}
                className="w-8 h-8 rounded-full bg-imperial-purple/10 flex items-center justify-center text-imperial-purple hover:bg-imperial-purple hover:text-white transition-colors duration-300"
              >
                <Mail size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Ntsane Foulo',
      role: 'CEO & Co-Founder',
      image: '/allan.jpg',
      bio: 'Ntsane Foulo is a tech visionary with extensive experience in software development and business strategy. Holding a degree in computer science and various industry certificates and a seasoned Full Stack Engineer, he brings deep expertise in application development, with a strong focus on AI-powered solutions that drive business transformation and innovation. Ntsane is highly proficient in both frontend and backend development, and has built a wide array of intelligent applications across various industries. He is an expert in a broad range of AI frameworks and automation platforms, including n8n, LangChain, LangGraph, TensorFlow, PyTorch, Hugging Face Transformers, and OpenAI’s API stack, among others. His ability to combine technical depth with strategic insight allows him to create solutions that are.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ntsane@innovationimperial.com',
      },
    },
    {
      name: 'Mcmarsh Dzwimbu',
      role: 'COO and Co-Founder',
      image: '/mcmarsh.png',
      bio: 'McMarsh Dzwimbu is an operations expert specializing in business process optimization and team management. He holds a distinction honors Degree in data science and Artificial Intelligence He currently serves as a Full Stack AI Engineer and App Developer at Innovation Imperial, where he has led and contributed to numerous projects involving live AI applications.\n\nMcMarsh specializes in building AI agents, automations, and scalable web applications tailored for business and industrial use cases. His technical expertise spans the MERN stack for web development, as well as Python, Pydantic, n8n, LangChain, LangGraph, and various AI frameworks used in intelligent system development.\n\nIn his current role, McMarsh designs, plans, and builds practical AI-driven solutions for businesses of all sizes looking to meaningfully integrate AI into their operations. He also collaborates with business buyers and sellers to develop ERP, accounting, HR, and other enterprise systems that enhance the functionality and value of their software infrastructure.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mcmarsh@innovationimperial.com',
      },
    },
    {
      name: 'Enock Ndoy',
      role: 'CTO',
      image: '/enock.jpg',
      bio: 'Expert in AI and machine learning with a passion for creating cutting-edge solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'enock@innovationimperial.com',
      },
    },
    {
      name: 'Tonderai Dzwimbu',
      role: 'CFO',
      image: '/WhatsApp Image 2025-04-29 at 12.49.44_33dfc7a7.jpg',
      bio: 'Tonderai Dzwimbu is a qualified Chartered Accountant [CA (Z)] with over four years of experience in accounting and assurance. He possesses strong management skills and extensive knowledge of various accounting, assurance, and related service frameworks.\n\nTonderai is proficient in a range of computer and web-based programs commonly used in the accounting and audit field, including SAP, QuickBooks, and Oracle. His professional experience spans multiple countries—Zimbabwe, Namibia, and South Africa—where he has served renowned and sizeable clients across diverse industries such as insurance, manufacturing, mining, and software as a service (SaaS).',
      social: {},
    },
    {
      name: 'Mtandazo dube',
      role: 'CSO',
      image: '/MTHA.jpg',
      bio: 'Mtandazo Dube is a seasoned business development and sales professional, He is the CEO of Eazytech international with a strong track record in driving growth and expanding market presence. He holds a Bachelor of Science in Business Studies and a Postgraduate Diploma in Business Administration,  With over 10 years of experience in the industry, he has successfully led numerous projects and initiatives that have contributed to the expansion of business operations and customer base. He is also a Full Stack Engineer and heavily gifted in frontend design and developemnt and a Certified Scrum Master.',
      social: {},
    },
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-imperial-purple/10 text-imperial-deepPurple mb-4">
          Our Team
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Meet the <span className="text-gradient">Innovators</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our diverse team of experts brings together unique skills, experiences, and perspectives 
          to create exceptional solutions for our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Team;
