import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Section, ProjectCard, Footer, ServiceCard, ToolBadge, StatsCard } from '../components/common';
import {
  UI_UX_PROJECTS, UI_UX_SERVICES, UI_UX_TOOLS,
  CREATIVE_MEDIA_PROJECTS, CREATIVE_MEDIA_SERVICES, CREATIVE_MEDIA_TOOLS,
  STATS, EXPERTISE_AREAS
} from '../constants';

type Page = 'uiux' | 'creative';

// Performance: Preload critical images
const preloadImages = () => {
  if (typeof window !== 'undefined') {
    const imageUrls = ['/hero-background.jpg', '/hero-background-mobile.jpg'];
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }
};

// --- UI/UX DESIGN PAGE ---
const UiUxPage: React.FC<{ onSwitch: () => void }> = React.memo(({ onSwitch }) => {
  // Memoize expensive data to prevent re-renders
  const memoizedProjects = useMemo(() => UI_UX_PROJECTS, []);
  const memoizedServices = useMemo(() => UI_UX_SERVICES, []);
  const memoizedTools = useMemo(() => UI_UX_TOOLS, []);
  
  const handleSwitchClick = useCallback(() => {
    onSwitch();
  }, [onSwitch]);

  return (
    <div className="text-stone-100">
      {/* Hero */}
      <div className="min-h-screen flex items-center px-4 sm:px-6 relative">
        {/* Background Image - Full visibility with mobile optimization */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mobile-hero-bg mobile-bg-fix"
          style={{
            backgroundImage: 'url("/hero-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            minHeight: '100vh'
          }}
        />
        
        {/* Desktop Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full hidden md:block">
          <div className="grid grid-cols-12 gap-8 items-center min-h-screen">
            <div className="col-span-6 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-500/30">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300 font-medium">UI/UX Designer & Product Developer</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Crafting</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                    Digital Excellence
                  </span>
                </h1>
                
                <p className="text-xl text-stone-300 leading-relaxed max-w-lg">
                  Transforming complex ideas into intuitive user experiences through research-driven design and cutting-edge development.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  View UI/UX Work
                </button>
                <button 
                  onClick={handleSwitchClick}
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-stone-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Creative Media →
                </button>
              </div>
            </div>
            
            <div className="col-span-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 rounded-3xl blur-3xl"></div>
                <StatsCard stats={STATS} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Content */}
        <div className="relative z-10 w-full md:hidden">
          <div className="text-center px-6 py-20">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-300 text-sm font-medium">UI/UX Designer</span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight">
                <span className="text-white">Crafting</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>
              
              <p className="text-lg text-stone-300 leading-relaxed">
                Transforming ideas into intuitive user experiences.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-8">
              <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-full font-semibold">
                View UI/UX Work
              </button>
              <button 
                onClick={handleSwitchClick}
                className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold"
              >
                Creative Media →
              </button>
            </div>
            
            <div className="mt-12">
              <StatsCard stats={STATS} />
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <Section title="UI/UX Design Services" titleGradient="from-emerald-400 to-yellow-400">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section title="Featured UI/UX Projects" titleGradient="from-emerald-400 to-yellow-400">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section title="Design & Development Tools" titleGradient="from-emerald-400 to-yellow-400">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {memoizedTools.map((tool, index) => (
            <ToolBadge key={index} {...tool} />
          ))}
        </div>
      </Section>

      {/* Expertise Areas */}
      <Section title="Industry Expertise" titleGradient="from-emerald-400 to-yellow-400">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_AREAS.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-xl border border-emerald-600/20 hover:border-emerald-400/40 transition-all duration-300">
              <div className="text-emerald-400 mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
              <p className="text-stone-400">{area.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
});

// --- CREATIVE MEDIA PAGE ---
const CreativeMediaPage: React.FC<{ onSwitch: () => void }> = React.memo(({ onSwitch }) => {
  const memoizedProjects = useMemo(() => CREATIVE_MEDIA_PROJECTS, []);
  const memoizedServices = useMemo(() => CREATIVE_MEDIA_SERVICES, []);
  const memoizedTools = useMemo(() => CREATIVE_MEDIA_TOOLS, []);
  
  const handleSwitchClick = useCallback(() => {
    onSwitch();
  }, [onSwitch]);

  return (
    <div className="text-stone-100">
      {/* Hero */}
      <div className="min-h-screen flex items-center px-4 sm:px-6 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mobile-hero-bg mobile-bg-fix"
          style={{
            backgroundImage: 'url("/hero-background-mobile.jpg")',
            filter: 'hue-rotate(60deg) saturate(1.2)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            minHeight: '100vh'
          }}
        />
        
        {/* Desktop Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full hidden md:block">
          <div className="grid grid-cols-12 gap-8 items-center min-h-screen">
            <div className="col-span-6 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-300 font-medium">Creative Media & Digital Marketing</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Creative</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    Visual Stories
                  </span>
                </h1>
                
                <p className="text-xl text-stone-300 leading-relaxed max-w-lg">
                  Bringing brands to life through compelling visuals, strategic campaigns, and immersive digital experiences.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  View Creative Work
                </button>
                <button 
                  onClick={handleSwitchClick}
                  className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-stone-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  ← UI/UX Design
                </button>
              </div>
            </div>
            
            <div className="col-span-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
                <StatsCard stats={STATS} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Content */}
        <div className="relative z-10 w-full md:hidden">
          <div className="text-center px-6 py-20">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-300 text-sm font-medium">Creative Media</span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight">
                <span className="text-white">Creative</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Visual Stories
                </span>
              </h1>
              
              <p className="text-lg text-stone-300 leading-relaxed">
                Bringing brands to life through compelling visuals and strategic campaigns.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-8">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold">
                View Creative Work
              </button>
              <button 
                onClick={handleSwitchClick}
                className="border-2 border-emerald-400 text-emerald-400 px-6 py-3 rounded-full font-semibold"
              >
                ← UI/UX Design
              </button>
            </div>
            
            <div className="mt-12">
              <StatsCard stats={STATS} />
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <Section title="Creative & Marketing Services" titleGradient="from-purple-400 to-pink-400">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section title="Featured Creative Projects" titleGradient="from-purple-400 to-pink-400">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section title="Creative & Marketing Tools" titleGradient="from-purple-400 to-pink-400">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {memoizedTools.map((tool, index) => (
            <ToolBadge key={index} {...tool} />
          ))}
        </div>
      </Section>
    </div>
  );
});

// --- MAIN APP COMPONENT ---
const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('uiux');

  // Performance optimization: Preload images on mount
  useEffect(() => {
    preloadImages();
  }, []);

  const switchToCreative = useCallback(() => {
    setCurrentPage('creative');
  }, []);

  const switchToUiUx = useCallback(() => {
    setCurrentPage('uiux');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-900 overflow-x-hidden">
      {currentPage === 'uiux' ? (
        <UiUxPage onSwitch={switchToCreative} />
      ) : (
        <CreativeMediaPage onSwitch={switchToUiUx} />
      )}
      
      {/* Village Bottom Image Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/village-bottom.png" 
              alt="Village Scene" 
              className="w-full h-auto object-cover"
              style={{ 
                filter: 'none',
                aspectRatio: 'auto'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 backdrop-blur-[0.5px] bg-white/5 rounded-3xl border border-white/10"></div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;