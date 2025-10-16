import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Video, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Footer } from '../components/common';
import { CONTACT_INFO } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background Image - Mobile optimized */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/village-background.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center shadow-2xl mx-auto">
              <Palette className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">
              Hazem Ashraf Sayed
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Choose your expertise area to explore my work
          </p>
          
          {/* Navigation Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* UI/UX Designer Card */}
            <Link 
              to="/ui-ux" 
              className="group bg-gradient-to-br from-emerald-800/50 to-emerald-900/50 backdrop-blur-sm border border-emerald-600/30 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Palette className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-emerald-300 mb-4">UI/UX Designer</h2>
              <p className="text-gray-300 mb-6">
                Product Developer specializing in user interface design and user experience optimization
              </p>
              <div className="flex items-center justify-center text-emerald-400 group-hover:text-emerald-300">
                <span className="mr-2">Explore UI/UX Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Creative Media Card */}
            <Link 
              to="/creative-media" 
              className="group bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-400/50 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Video className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-purple-300 mb-4">Creative Media Specialist</h2>
              <p className="text-gray-300 mb-6">
                Digital Marketing Specialist focusing on creative campaigns and visual storytelling
              </p>
              <div className="flex items-center justify-center text-purple-400 group-hover:text-purple-300">
                <span className="mr-2">Explore Creative Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-stone-900/80 to-emerald-900/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Let's <span className="text-emerald-400">Connect</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">{CONTACT_INFO.email}</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">{CONTACT_INFO.phone}</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">{CONTACT_INFO.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Village Bottom Image Section */}
      <section className="py-20 px-6">
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