
import React, { useState, useEffect } from 'react';
import { Section, ProjectCard, Footer, ServiceCard, ToolBadge, StatsCard } from './components/common';
import {
  UI_UX_PROJECTS, UI_UX_SERVICES, UI_UX_TOOLS,
  CREATIVE_MEDIA_PROJECTS, CREATIVE_MEDIA_SERVICES, CREATIVE_MEDIA_TOOLS,
  STATS, EXPERTISE_AREAS
} from './constants';

type Page = 'uiux' | 'creative';

// --- UI/UX DESIGN PAGE ---
const UiUxPage: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
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
        
        {/* Content - Left aligned only */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl animate-slide-in-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white drop-shadow-2xl">Hazem Ashraf Sayed</h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-yellow-200 drop-shadow-lg">UI/UX Designer & Product Developer</p>
            <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed text-white drop-shadow-md">
              Multi-skilled specialist combining UI/UX design with creative production and digital marketing, with 5+ years of experience. 
              Transforming ideas into engaging digital products that improve user retention rates by 40%.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-yellow-200/90 px-4 py-2 rounded-full text-slate-800 font-medium backdrop-blur-sm">
                5+ Years Experience
              </div>
              <div className="bg-yellow-200/90 px-4 py-2 rounded-full text-slate-800 font-medium backdrop-blur-sm">
                40+ Happy Clients
              </div>
              <div className="bg-yellow-200/90 px-4 py-2 rounded-full text-slate-800 font-medium backdrop-blur-sm">
                10+ Mobile Apps
              </div>
            </div>
            <button
              onClick={onSwitch}
              className="bg-yellow-200 text-slate-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Explore Creative Side →
            </button>
          </div>
        </div>
      </div>

      {/* About */}
      <Section title="About Hazem Ashraf Sayed" className="">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-stone-200 leading-relaxed mb-8">
            A multi-skilled specialist who combines UI/UX design, creative production, and digital marketing with over 5 years of experience in each field. 
            Possesses a unique ability to transform ideas into engaging digital products and impactful visual content, making him a "one-man creative powerhouse" 
            serving 40+ clients across diverse industries including education, technology, real estate, and fitness.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard 
              icon="users" 
              value="40+" 
              label="Happy Clients" 
              className="bg-stone-900/80 shadow-lg border border-yellow-500/30 text-stone-100"
            />
            <StatsCard 
              icon="trending-up" 
              value="40%" 
              label="Retention Boost" 
              className="bg-stone-900/80 shadow-lg border border-yellow-500/30 text-stone-100"
            />
            <StatsCard 
              icon="award" 
              value="500K+" 
              label="EGP Revenue" 
              className="bg-stone-900/80 shadow-lg border border-yellow-500/30 text-stone-100"
            />
            <StatsCard 
              icon="cpu" 
              value="10+" 
              label="Apps Designed" 
              className="bg-stone-900/80 shadow-lg border border-yellow-500/30 text-stone-100"
            />
          </div>
        </div>
      </Section>

      {/* Expertise Areas */}
      <Section title="Industry Expertise" className="">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-stone-200 leading-relaxed">
            <span className="font-semibold text-yellow-300">Education</span> • 
            <span className="font-semibold text-yellow-300"> Technology</span> • 
            <span className="font-semibold text-yellow-300"> Real Estate</span> • 
            <span className="font-semibold text-yellow-300"> Fitness</span> • 
            <span className="font-semibold text-yellow-300"> Government</span> • 
            <span className="font-semibold text-yellow-300"> E-commerce</span>
          </p>
        </div>
      </Section>

      {/* Projects */}
      <Section title="Featured Projects" className="bg-stone-900/60 backdrop-blur-sm rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UI_UX_PROJECTS.map(p => <ProjectCard key={p.title} project={p} className="bg-stone-900/80 text-stone-100 border border-yellow-500/30 backdrop-blur-sm rounded-2xl"/>)}
        </div>
      </Section>

      {/* Services */}
      <Section title="Specialized Services" className="">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {UI_UX_SERVICES.map(s => (
            <ServiceCard 
              key={s.name} 
              service={s} 
              className="bg-stone-900/80 text-yellow-300 hover:bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm"
            />
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section title="Design Toolkit" className="">
         <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {UI_UX_TOOLS.map(t => (
            <ToolBadge 
              key={t.name} 
              tool={t} 
              className="text-stone-200 bg-stone-900/80 hover:bg-yellow-500/20 hover:text-yellow-300 border border-yellow-500/30 backdrop-blur-sm"
            />
          ))}
        </div>
      </Section>
    </div>
  );
};


// --- CREATIVE MEDIA PAGE ---
const CreativeMediaPage: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
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
        
        {/* Content - Left aligned only */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl animate-slide-in-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white drop-shadow-2xl">Hazem Ashraf Sayed</h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-yellow-200 drop-shadow-lg">Creative Media & Digital Marketing Specialist</p>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-white drop-shadow-md leading-relaxed">
              Producing visual content and promotional videos that achieved millions of views on TikTok and Facebook. 
              Managing complete marketing campaigns from photography to paid advertising with measurable results.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-yellow-200/90 px-4 py-2 rounded-full text-slate-800 font-medium backdrop-blur-md border border-yellow-300/20">
                6M+ Views
              </div>
              <div className="bg-yellow-200/90 px-4 py-2 rounded-full text-slate-800 font-medium backdrop-blur-md border border-yellow-300/20">
                70+ Clients
              </div>
              <div className="bg-yellow-200/90 px-4 py-2 rounded-full text-slate-800 font-medium backdrop-blur-md border border-yellow-300/20">
                500K+ Paid Campaigns
              </div>
            </div>
            <button
              onClick={onSwitch}
              className="bg-yellow-200 text-slate-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              ← Explore Design Side
            </button>
          </div>
        </div>
      </div>

      {/* About */}
       <Section title="Creative Specialization" titleClassName="text-white" className="">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-stone-200 leading-relaxed mb-8">
            Specialist in creative production and digital marketing with professional tools including Premiere Pro, After Effects, CapCut, Canva, Photoshop, and Illustrator. 
            Expert in motion design, audio editing, and content coordination for both short and long-form content across multiple platforms.
          </p>
          
          {/* Creative Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard 
              icon="eye" 
              value="6M+" 
              label="Total Views" 
              className="bg-black/40 text-white backdrop-blur-md border border-yellow-500/20"
            />
            <StatsCard 
              icon="users" 
              value="70K" 
              label="TikTok Growth" 
              className="bg-black/40 text-white backdrop-blur-md border border-yellow-500/20"
            />
            <StatsCard 
              icon="target" 
              value="500K+" 
              label="Paid Campaigns" 
              className="bg-black/40 text-white backdrop-blur-md border border-yellow-500/20"
            />
            <StatsCard 
              icon="building" 
              value="70+" 
              label="Clients Managed" 
              className="bg-stone-900/80 text-white backdrop-blur-md border border-yellow-500/30"
            />
          </div>
        </div>
      </Section>

      {/* Campaigns */}
      <Section title="Featured Campaigns" titleClassName="text-white" className="bg-stone-900/60 backdrop-blur-sm rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CREATIVE_MEDIA_PROJECTS.map(p => <ProjectCard key={p.title} project={p} className="bg-stone-900/80 text-white backdrop-blur-sm border border-yellow-500/30 rounded-2xl" />)}
        </div>
      </Section>

      {/* Services */}
      <Section title="Creative Services" titleClassName="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-stone-200 leading-relaxed">
            <span className="font-semibold text-yellow-300">Video Editing</span> • 
            <span className="font-semibold text-yellow-300"> Motion Graphics</span> • 
            <span className="font-semibold text-yellow-300"> Social Media Strategy</span> • 
            <span className="font-semibold text-yellow-300"> Paid Campaigns</span> • 
            <span className="font-semibold text-yellow-300"> Photography</span> • 
            <span className="font-semibold text-yellow-300"> Sound Design</span> • 
            <span className="font-semibold text-yellow-300"> Content Planning</span> • 
            <span className="font-semibold text-yellow-300"> Brand Development</span>
          </p>
        </div>
      </Section>
      
      {/* Tools */}
      <Section title="Creative Toolkit" titleClassName="text-white">
         <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {CREATIVE_MEDIA_TOOLS.map(t => (
            <ToolBadge 
              key={t.name} 
              tool={t} 
              className="text-white bg-stone-900/80 backdrop-blur-md hover:bg-yellow-500/30 border border-yellow-500/30"
            />
          ))}
        </div>
      </Section>
    </div>
  );
};


// --- APP CONTAINER ---
const App: React.FC = () => {
  const [page, setPage] = useState<Page>('uiux');
  const [isFading, setIsFading] = useState<boolean>(false);

  const handleSwitchPage = (newPage: Page) => {
    if (page === newPage) return;
    
    setIsFading(true);
    // Wait for fade-out to complete before switching content
    setTimeout(() => {
      setPage(newPage);
      window.scrollTo(0, 0);
      // Wait a moment for new content to render, then fade in
      setTimeout(() => {
         setIsFading(false);
      }, 50);
    }, 400);
  };
  
  const isCreativePage = page === 'creative';

  return (
    <div className={`antialiased transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {page === 'uiux' 
            ? <UiUxPage onSwitch={() => handleSwitchPage('creative')} /> 
            : <CreativeMediaPage onSwitch={() => handleSwitchPage('uiux')} />
        }
        <Footer className="bg-black/40 text-stone-200 border-t border-yellow-500/20 backdrop-blur-sm"/>
    </div>
  );
};

export default App;
