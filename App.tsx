
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Section, ProjectCard, Footer, ServiceCard, ToolBadge, StatsCard } from './components/common';
import {
  UI_UX_SERVICES, UI_UX_TOOLS,
  CREATIVE_MEDIA_SERVICES, CREATIVE_MEDIA_TOOLS,
  STATS, EXPERTISE_AREAS
} from './constants';
import { getProjects, getCampaigns } from './services/firebaseService';
import { Project, Campaign } from './types';

// Import Admin Components
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

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
const UiUxPage: React.FC = React.memo(() => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Memoize expensive data to prevent re-renders
  const memoizedServices = useMemo(() => UI_UX_SERVICES, []);
  const memoizedTools = useMemo(() => UI_UX_TOOLS, []);
  
  // Load projects from Firebase
  useEffect(() => {
    const loadProjects = async () => {
      try {
        console.log('Loading projects from Firebase...');
        
        // Try to get current user first
        import('./services/authService').then(async ({ getCurrentUser }) => {
          try {
            const user = await getCurrentUser();
            console.log('Current user:', user);
          } catch (error) {
            console.log('No user logged in, proceeding without auth');
          }
        });
        
        const firebaseProjects = await getProjects();
        console.log('Loaded projects:', firebaseProjects);
        
        // If no projects found, show a message
        if (firebaseProjects.length === 0) {
          console.log('No projects found in Firebase. Go to admin panel to add some.');
        }
        
        setProjects(firebaseProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProjects();
  }, []);

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
          <div className="max-w-2xl animate-slide-in-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white drop-shadow-2xl">Hazem Ashraf Sayed</h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-yellow-200 drop-shadow-lg">UI/UX Designer & Product Developer</p>
            <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed text-white drop-shadow-md">
              Multi-skilled specialist combining UI/UX design with creative production and digital marketing, with 5+ years of experience. 
              Transforming ideas into engaging digital products that improve user retention rates by 40%.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 rounded-full text-white font-medium backdrop-blur-sm shadow-lg">
                5+ Years Experience
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-full text-white font-medium backdrop-blur-sm shadow-lg">
                40+ Happy Clients
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-2 rounded-full text-white font-medium backdrop-blur-sm shadow-lg">
                10+ Mobile Apps
              </div>
            </div>
            <Link
              to="/creative-media"
              className="bg-yellow-200 text-slate-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
            >
              Explore Creative Side →
            </Link>
          </div>
        </div>
        
        {/* Mobile Content Layout */}
        <div className="relative z-10 w-full md:hidden mobile-hero-layout">
          {/* Village Image at Top */}
          <div className="mobile-bottom-image"></div>
          
          {/* Content Below Image */}
          <div className="text-center animate-slide-in-left mobile-hero-content pt-4 pb-8">
            <h1 className="font-black text-white drop-shadow-2xl">Hazem Ashraf Sayed</h1>
            <p className="subtitle font-semibold text-yellow-200 drop-shadow-lg">UI/UX Designer & Product Developer</p>
            <p className="description leading-relaxed text-white drop-shadow-md px-2">
              Multi-skilled specialist combining UI/UX design with creative production and digital marketing, with 5+ years of experience.
            </p>
            <div className="stats-buttons flex flex-wrap justify-center px-2">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-white font-medium backdrop-blur-sm shadow-lg">
                5+ Years Experience
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-medium backdrop-blur-sm shadow-lg">
                40+ Happy Clients
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full text-white font-medium backdrop-blur-sm shadow-lg">
                10+ Mobile Apps
              </div>
            </div>
            <Link
              to="/creative-media"
              className="bg-yellow-200 text-slate-800 font-bold py-3 px-6 rounded-full text-base hover:bg-yellow-300 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block mb-4"
            >
              Explore Creative Side →
            </Link>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {EXPERTISE_AREAS.map(area => (
            <ServiceCard 
              key={area.name} 
              name={area.name}
              icon={area.icon}
              className="bg-stone-900/80 text-yellow-300 hover:bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm"
            />
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="Featured Projects" className="bg-stone-900/60 backdrop-blur-sm rounded-3xl">
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-stone-400 mb-2">لا توجد مشاريع حالياً.</p>
            <p className="text-stone-500 text-sm">يمكنك إضافة مشاريع من لوحة التحكم أو تحديث إعدادات Firebase.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(p => <ProjectCard key={p.id || p.title} project={p} className="bg-stone-900/80 text-stone-100 border border-yellow-500/30 backdrop-blur-sm rounded-2xl"/>)}
          </div>
        )}
      </Section>

      {/* Services */}
      <Section title="Specialized Services" className="">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {memoizedServices.map(s => (
            <ServiceCard 
              key={s.name} 
              name={s.name}
              icon={s.icon}
              className="bg-stone-900/80 text-yellow-300 hover:bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm"
            />
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section title="Design Toolkit" className="">
         <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {memoizedTools.map(t => (
            <ToolBadge 
              key={t.name} 
              name={t.name}
              icon={t.icon}
              className="text-stone-200 bg-stone-900/80 hover:bg-yellow-500/20 hover:text-yellow-300 border border-yellow-500/30 backdrop-blur-sm"
            />
          ))}
        </div>
      </Section>
      <Footer className="bg-black/40 text-stone-200 border-t border-yellow-500/20 backdrop-blur-sm"/>
    </div>
  );
});

// --- CREATIVE MEDIA PAGE ---
const CreativeMediaPage: React.FC = React.memo(() => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Memoize expensive data to prevent re-renders
  const memoizedServices = useMemo(() => CREATIVE_MEDIA_SERVICES, []);
  const memoizedTools = useMemo(() => CREATIVE_MEDIA_TOOLS, []);
  
  // Load campaigns from Firebase
  useEffect(() => {
    const loadCampaigns = async () => {
      try {
        console.log('Loading campaigns from Firebase...');
        const firebaseCampaigns = await getCampaigns();
        console.log('Loaded campaigns:', firebaseCampaigns);
        setCampaigns(firebaseCampaigns);
      } catch (error) {
        console.error('Error loading campaigns:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadCampaigns();
  }, []);

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
          <div className="max-w-2xl animate-slide-in-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white drop-shadow-2xl">Hazem Ashraf Sayed</h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-yellow-200 drop-shadow-lg">Creative Media & Digital Marketing Specialist</p>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-white drop-shadow-md leading-relaxed">
              Producing visual content and promotional videos that achieved millions of views on TikTok and Facebook. 
              Managing complete marketing campaigns from photography to paid advertising with measurable results.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2 rounded-full text-white font-medium backdrop-blur-md shadow-lg">
                6M+ Views
              </div>
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-2 rounded-full text-white font-medium backdrop-blur-md shadow-lg">
                70+ Clients
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 rounded-full text-white font-medium backdrop-blur-md shadow-lg">
                500K+ Paid Campaigns
              </div>
            </div>
            <Link
              to="/"
              className="bg-yellow-200 text-slate-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-block"
            >
              ← Explore Design Side
            </Link>
          </div>
        </div>
        
        {/* Mobile Content Layout */}
        <div className="relative z-10 w-full md:hidden mobile-hero-layout">
          {/* Village Image at Top */}
          <div className="mobile-bottom-image"></div>
          
          {/* Content Below Image */}
          <div className="text-center animate-slide-in-left mobile-hero-content pt-4 pb-8">
            <h1 className="font-black text-white drop-shadow-2xl">Hazem Ashraf Sayed</h1>
            <p className="subtitle font-semibold text-yellow-200 drop-shadow-lg">Creative Media & Digital Marketing Specialist</p>
            <p className="description leading-relaxed text-white drop-shadow-md px-2">
              Producing visual content and promotional videos that achieved millions of views on TikTok and Facebook.
            </p>
            <div className="stats-buttons flex flex-wrap justify-center px-2">
              <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-full text-white font-medium backdrop-blur-sm shadow-lg">
                6M+ Views
              </div>
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full text-white font-medium backdrop-blur-sm shadow-lg">
                70+ Clients
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white font-medium backdrop-blur-sm shadow-lg">
                500K+ Paid Campaigns
              </div>
            </div>
            <Link
              to="/"
              className="bg-yellow-200 text-slate-800 font-bold py-3 px-6 rounded-full text-base hover:bg-yellow-300 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block mb-4"
            >
              ← Explore Design Side
            </Link>
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
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map(c => <ProjectCard key={c.id || c.title} project={c} className="bg-stone-900/80 text-white backdrop-blur-sm border border-yellow-500/30 rounded-2xl" />)}
          </div>
        )}
      </Section>

      {/* Services */}
      <Section title="Creative Services" titleClassName="text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {memoizedServices.map(s => (
            <ServiceCard 
              key={s.name} 
              name={s.name}
              icon={s.icon}
              className="bg-stone-900/80 text-yellow-300 hover:bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm"
            />
          ))}
        </div>
      </Section>
      
      {/* Tools */}
      <Section title="Creative Toolkit" titleClassName="text-white">
         <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {memoizedTools.map(t => (
            <ToolBadge 
              key={t.name} 
              name={t.name}
              icon={t.icon}
              className="text-white bg-stone-900/80 backdrop-blur-md hover:bg-yellow-500/30 border border-yellow-500/30"
            />
          ))}
        </div>
      </Section>
      <Footer className="bg-black/40 text-stone-200 border-t border-yellow-500/20 backdrop-blur-sm"/>
    </div>
  );
});

// --- APP CONTAINER ---
const App: React.FC = () => {
  // Preload images on app mount
  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<UiUxPage />} />
      <Route path="/creative-media" element={<CreativeMediaPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
