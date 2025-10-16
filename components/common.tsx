
import React from 'react';
import { Project } from '../types';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants';
import { 
  Palette, Layout, Code, Grid3X3, Search, Play, Video, Move, Share, Target, Camera, Music, Calendar, Star,
  Film, Zap, Scissors, Image, Layers, PenTool, BookOpen, Cpu, Home, Activity, Building, ShoppingCart,
  Award, TrendingUp, Users, Eye, Mail, Phone, MapPin, ExternalLink, Globe, Link2, MessageCircle
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
  <svg viewBox="0 0 24 24" className={className} fill="#1769ff">
    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.67 1.42.67 2.29 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.767-.64.16-1.34.24-2.11.24H0V4.51h6.938v-.007zM3.495 8.823h2.475c.696 0 1.2-.13 1.52-.4.32-.27.48-.65.48-1.14 0-.56-.16-.95-.48-1.19-.32-.24-.83-.36-1.52-.36H3.495v3.09zm0 7.534h2.963c.42 0 .8-.04 1.14-.13.34-.09.63-.22.87-.4.24-.18.43-.39.56-.65.13-.26.2-.56.2-.9 0-.66-.18-1.16-.54-1.48-.36-.33-.87-.49-1.54-.49H3.495v4.05zm11.31-2.94c.06.5.25.85.58 1.06.33.2.72.31 1.17.31.47 0 .85-.12 1.14-.37.3-.25.44-.55.44-.9h2.906c-.24 1.17-.77 2.07-1.6 2.7-.84.63-1.8.95-2.9.95-1.42 0-2.5-.45-3.26-1.34-.76-.9-1.14-2.1-1.14-3.61 0-1.51.38-2.72 1.15-3.62.77-.9 1.85-1.35 3.26-1.35 1.41 0 2.5.45 3.26 1.35.76.9 1.14 2.1 1.14 3.61 0 .13-.01.24-.02.35H14.8v.01zm.01-2.15h4.32c-.06-.5-.25-.85-.58-1.06-.33-.2-.72-.31-1.17-.31-.47 0-.85.12-1.14.37-.3.25-.44.55-.44.9l.01.1zm4.61-6.74H16.21v-1.68h3.69v1.68z"/>
  </svg>
);

const VimeoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#1ab7ea">
    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.257-.795 2.267-2.385 1.01-1.589 1.551-2.793 1.624-3.612.145-1.366-.395-2.049-1.614-2.049-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#0077b5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} text-green-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} text-blue-600`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WebsiteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Globe className={`${className} text-purple-500`} />
);


// --- REUSABLE COMPONENTS ---
interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  titleGradient?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  children, 
  className = '', 
  titleClassName = '',
  titleGradient 
}) => (
  <section className={`w-full max-w-5xl mx-auto px-6 py-12 md:py-16 ${className}`}>
    <h2 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center ${titleClassName} ${
      titleGradient ? `bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent` : ''
    }`}>
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
    {project.imageUrl ? (
      <img 
        className="w-full h-48 object-cover" 
        src={project.imageUrl} 
        alt={project.title}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTAwSDE3MEMxNjcuMjUgMTAwIDE2NSAxMDIuMjUgMTY1IDEwNVYxMTBDMTY1IDExMi43NSAxNjcuMjUgMTE1IDE3MCAxMTVIMTc1QzE3Ny43NSAxMTUgMTgwIDExMi43NSAxODAgMTEwVjEwNUMxODAgMTAyLjI1IDE3Ny43NSAxMDAgMTc1IDEwMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+CjxyZWN0IHg9IjEwMCIgeT0iMTMwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQiIGZpbGw9IiM5Q0E0QUYiLz4KPHJlY3QgeD0iMTIwIiB5PSIxNDAiIHdpZHRoPSIxNjAiIGhlaWdodD0iNCIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4K';
        }}
      />
    ) : (
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <Image className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p className="text-sm">لا توجد صورة</p>
        </div>
      </div>
    )}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{project.title}</div>
      <p className="text-base mb-3">
        {project.description}
      </p>
      
      {/* Stats */}
      {project.stats && (
        <div className="flex items-center text-sm font-medium opacity-75 mb-3">
          <TrendingUp className="w-4 h-4 mr-1" />
          {project.stats}
        </div>
      )}
      
      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Action Button */}
      {project.showButton && project.buttonText && project.buttonUrl && (
        <div className="mt-4 text-center">
          <a
            href={project.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors duration-200"
          >
            {project.buttonText}
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      )}
      
      {/* Demo/Source Links */}
      {(project.demoUrl || project.sourceUrl) && (
        <div className="flex gap-2 mt-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 text-sm rounded-lg transition-colors duration-200"
            >
              <Eye className="w-4 h-4 mr-1" />
              عرض مباشر
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 text-sm rounded-lg transition-colors duration-200"
            >
              <Link2 className="w-4 h-4 mr-1" />
              المصدر
            </a>
          )}
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
  name: string;
  icon?: string;
  title?: string;
  description?: string;
  color?: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  name, 
  icon, 
  title, 
  description, 
  color, 
  className = '' 
}) => {
  const IconComponent = icon ? iconMap[icon as keyof typeof iconMap] : null;
  
  return (
    <div className={`p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
      <div className="flex items-center justify-center mb-3">
        {IconComponent && <IconComponent className="w-8 h-8" />}
      </div>
      <h3 className="font-semibold text-lg text-center mb-2">{title || name}</h3>
      {description && (
        <p className="text-sm text-gray-600 text-center">{description}</p>
      )}
    </div>
  );
};

// Tool Badge Component
interface ToolBadgeProps {
  name: string;
  icon?: string;
  className?: string;
}

export const ToolBadge: React.FC<ToolBadgeProps> = ({ name, icon, className = '' }) => {
  const IconComponent = icon ? iconMap[icon as keyof typeof iconMap] : null;
  
  return (
    <span className={`inline-flex items-center px-4 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 ${className}`}>
      {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
      {name}
    </span>
  );
};

// Stats Card Component
interface StatsCardProps {
  stats?: {
    experience: string;
    clients: string;
    projects: string;
    views: string;
    retention: string;
    revenue: string;
  };
  icon?: string;
  value?: string;
  label?: string;
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ 
  stats, 
  icon, 
  value, 
  label, 
  className = '' 
}) => {
  if (stats) {
    // عرض إحصائيات متعددة
    return (
      <div className={`bg-gradient-to-br from-stone-800/50 to-emerald-900/50 backdrop-blur-sm border border-emerald-600/20 rounded-2xl p-8 ${className}`}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">{stats.experience}</div>
            <div className="text-sm text-stone-300">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.clients}</div>
            <div className="text-sm text-stone-300">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">{stats.projects}</div>
            <div className="text-sm text-stone-300">Projects Done</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.views}</div>
            <div className="text-sm text-stone-300">Portfolio Views</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">{stats.retention}</div>
            <div className="text-sm text-stone-300">Client Retention</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.revenue}</div>
            <div className="text-sm text-stone-300">Revenue Growth</div>
          </div>
        </div>
      </div>
    );
  }

  // عرض إحصائية واحدة
  const IconComponent = icon ? iconMap[icon as keyof typeof iconMap] : null;
  
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

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => (
    <footer className={`py-6 px-6 mt-0 ${className}`}>
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
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a 
                            href={SOCIAL_LINKS.behance} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center space-x-2 hover:opacity-80 transition-all duration-300 transform hover:scale-110"
                            title="View Behance Portfolio"
                        >
                            <BehanceIcon className="w-8 h-8" />
                            <span className="hidden sm:inline text-sm font-medium text-stone-300 group-hover:text-blue-400 transition-colors">Behance</span>
                        </a>
                        <a 
                            href={SOCIAL_LINKS.vimeo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center space-x-2 hover:opacity-80 transition-all duration-300 transform hover:scale-110"
                            title="View Vimeo Videos"
                        >
                            <VimeoIcon className="w-8 h-8" />
                            <span className="hidden sm:inline text-sm font-medium text-stone-300 group-hover:text-cyan-400 transition-colors">Vimeo</span>
                        </a>
                        <a 
                            href={SOCIAL_LINKS.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center space-x-2 hover:opacity-80 transition-all duration-300 transform hover:scale-110"
                            title="Connect on LinkedIn"
                        >
                            <LinkedInIcon className="w-8 h-8" />
                            <span className="hidden sm:inline text-sm font-medium text-stone-300 group-hover:text-blue-400 transition-colors">LinkedIn</span>
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
                    
                    {/* قسم المطور */}
                    <div className="mt-6 pt-4 border-t border-stone-600/30">
                        <p className="text-sm text-stone-400 mb-2">
                            Designed & Developed by: <span className="font-bold text-emerald-400">Sameh Reda</span>
                        </p>
                        <p className="text-sm text-yellow-300 font-medium mb-3">Order Your Website Now</p>
                        <div className="flex justify-center md:justify-end space-x-3">
                            <a
                                href="https://wa.me/01023160657"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-green-600/20 hover:bg-green-600/40 transition-all duration-300 group"
                                title="WhatsApp"
                            >
                                <WhatsAppIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://www.facebook.com/SAME7.REDAA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 transition-all duration-300 group"
                                title="Facebook"
                            >
                                <FacebookIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://www.doc-digital.online/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 transition-all duration-300 group"
                                title="Website"
                            >
                                <WebsiteIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
