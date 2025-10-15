
import React from 'react';
import { Project } from '../types';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants';
import { 
  Palette, Layout, Code, Grid3X3, Search, Play, Video, Move, Share, Target, Camera, Music, Calendar, Star,
  Film, Zap, Scissors, Image, Layers, PenTool, BookOpen, Cpu, Home, Activity, Building, ShoppingCart,
  Award, TrendingUp, Users, Eye, Mail, Phone, MapPin, ExternalLink, Globe, Link2
} from 'lucide-react';

// Icon mapping
const iconMap = {
  palette: Palette,
  layout: Layout,
  code: Code,
  grid: Grid3X3,
  search: Search,
  play: Play,
  video: Video,
  move: Move,
  share: Share,
  target: Target,
  camera: Camera,
  music: Music,
  calendar: Calendar,
  star: Star,
  film: Film,
  zap: Zap,
  scissors: Scissors,
  image: Image,
  layers: Layers,
  'pen-tool': PenTool,
  'book-open': BookOpen,
  cpu: Cpu,
  home: Home,
  activity: Activity,
  building: Building,
  'shopping-cart': ShoppingCart,
  award: Award,
  'trending-up': TrendingUp,
  users: Users,
  eye: Eye,
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin
};

// --- IMAGE-BASED ICONS ---
const BehanceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="/behance-icon.png" 
    alt="Behance" 
    className={`object-contain transition-all duration-300 hover:scale-110 ${className || 'w-6 h-6'}`}
    style={{ 
      filter: 'invert(1) brightness(0.9)',
      minWidth: '24px',
      minHeight: '24px'
    }}
  />
);

const VimeoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="/vimeo-icon.png" 
    alt="Vimeo" 
    className={`object-contain transition-all duration-300 hover:scale-110 ${className || 'w-6 h-6'}`}
    style={{ 
      filter: 'invert(1) brightness(0.9)',
      minWidth: '24px',
      minHeight: '24px'
    }}
  />
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);


// --- REUSABLE COMPONENTS ---
interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = '', titleClassName = '' }) => (
  <section className={`w-full max-w-5xl mx-auto px-6 py-12 md:py-16 ${className}`}>
    <h2 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center ${titleClassName}`}>
      {title}
    </h2>
    {children}
  </section>
);

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => (
  <div className={`rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${className}`}>
    <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{project.title}</div>
      <p className="text-base mb-3">
        {project.description}
      </p>
      {project.stats && (
        <div className="flex items-center text-sm font-medium opacity-75">
          <TrendingUp className="w-4 h-4 mr-1" />
          {project.stats}
        </div>
      )}
    </div>
  </div>
);

interface FooterProps {
    className?: string;
}

// Service Card Component
interface ServiceCardProps {
  service: { name: string; icon?: string };
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '' }) => {
  const IconComponent = service.icon ? iconMap[service.icon as keyof typeof iconMap] : null;
  
  return (
    <div className={`p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
      <div className="flex items-center justify-center mb-3">
        {IconComponent && <IconComponent className="w-8 h-8" />}
      </div>
      <p className="font-semibold text-lg text-center">{service.name}</p>
    </div>
  );
};

// Tool Badge Component
interface ToolBadgeProps {
  tool: { name: string; icon?: string };
  className?: string;
}

export const ToolBadge: React.FC<ToolBadgeProps> = ({ tool, className = '' }) => {
  const IconComponent = tool.icon ? iconMap[tool.icon as keyof typeof iconMap] : null;
  
  return (
    <span className={`inline-flex items-center px-4 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 ${className}`}>
      {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
      {tool.name}
    </span>
  );
};

// Stats Card Component
interface StatsCardProps {
  icon: string;
  value: string;
  label: string;
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label, className = '' }) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  
  return (
    <div className={`text-center p-6 rounded-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="flex justify-center mb-3">
        {IconComponent && <IconComponent className="w-8 h-8" />}
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-75">{label}</div>
    </div>
  );
};

export const Footer: React.FC<FooterProps> = ({ className = '' }) => (
    <footer className={`py-12 px-6 ${className}`}>
        <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center justify-center md:justify-start">
                        <Mail className="w-5 h-5 mr-2" />
                        Contact
                    </h3>
                    <div className="space-y-2">
                        <p className="flex items-center justify-center md:justify-start">
                            <Mail className="w-4 h-4 mr-2 opacity-70" />
                            {CONTACT_INFO.email}
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <Phone className="w-4 h-4 mr-2 opacity-70" />
                            {CONTACT_INFO.phone}
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <MapPin className="w-4 h-4 mr-2 opacity-70" />
                            {CONTACT_INFO.location}
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center justify-center md:justify-start">
                        <Globe className="w-5 h-5 mr-2 text-yellow-300" />
                        <span className="text-yellow-300">Connect</span>
                    </h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a 
                            href={SOCIAL_LINKS.behance} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center space-x-2 hover:opacity-75 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px]"
                            title="View Behance Portfolio"
                        >
                            <div className="p-3 rounded-xl bg-gradient-to-br from-stone-700 to-stone-800 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg">
                                <BehanceIcon className="w-6 h-6 text-yellow-200 group-hover:text-white transition-colors" />
                            </div>
                            <span className="hidden sm:inline text-sm font-medium text-stone-300 group-hover:text-yellow-300 transition-colors">Behance</span>
                        </a>
                        <a 
                            href={SOCIAL_LINKS.vimeo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center space-x-2 hover:opacity-75 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px]"
                            title="View Vimeo Videos"
                        >
                            <div className="p-3 rounded-xl bg-gradient-to-br from-stone-700 to-stone-800 group-hover:from-cyan-600 group-hover:to-cyan-700 transition-all duration-300 shadow-lg">
                                <VimeoIcon className="w-6 h-6 text-yellow-200 group-hover:text-white transition-colors" />
                            </div>
                            <span className="hidden sm:inline text-sm font-medium text-stone-300 group-hover:text-yellow-300 transition-colors">Vimeo</span>
                        </a>
                        <a 
                            href={SOCIAL_LINKS.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center space-x-2 hover:opacity-75 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px]"
                            title="Connect on LinkedIn"
                        >
                            <div className="p-3 rounded-xl bg-gradient-to-br from-stone-700 to-stone-800 group-hover:from-blue-800 group-hover:to-blue-900 transition-all duration-300 shadow-lg">
                                <LinkedInIcon className="w-6 h-6 text-yellow-200 group-hover:text-white transition-colors" />
                            </div>
                            <span className="hidden sm:inline text-sm font-medium text-stone-300 group-hover:text-yellow-300 transition-colors">LinkedIn</span>
                        </a>
                    </div>
                </div>
                <div className="md:text-right">
                    <h3 className="font-bold text-lg mb-4 flex items-center justify-center md:justify-end">
                        <Star className="w-5 h-5 mr-2 text-yellow-300" />
                        <span className="text-yellow-300">Hazem Ashraf Sayed</span>
                    </h3>
                    <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                    <p className="text-sm opacity-75">Built with React & Tailwind CSS.</p>
                    <p className="text-sm font-medium mt-2">5+ Years Creative Excellence</p>
                </div>
            </div>
        </div>
    </footer>
);
