import React, { useState, useEffect } from 'react';
import { ProjectCard, Footer } from '../components/common';
import { getFeaturedCampaigns } from '../services/firebaseService';
import { Campaign } from '../types';
import { Video, Camera, Megaphone, Zap } from 'lucide-react';

const CreativeMediaPage: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCampaigns = async () => {
      try {
        const featuredCampaigns = await getFeaturedCampaigns();
        setCampaigns(featuredCampaigns);
      } catch (error) {
        console.error('Error loading campaigns:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCampaigns();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-white">
              Hazem Ashraf
            </a>
            <div className="flex items-center gap-6">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/ui-ux" className="text-gray-300 hover:text-white transition-colors">UI/UX Designer</a>
              <a href="/creative-media" className="text-purple-400 font-medium">Creative Media</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full">
              <Video className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Creative Media Specialist
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Crafting compelling digital campaigns and visual stories that captivate audiences
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Camera className="w-5 h-5 text-purple-400" />
              <span>Visual Content</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Megaphone className="w-5 h-5 text-purple-400" />
              <span>Digital Marketing</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Zap className="w-5 h-5 text-purple-400" />
              <span>Campaign Strategy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Creative <span className="text-purple-400">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Video Production', icon: '🎬', description: 'Professional video content creation' },
              { title: 'Social Media', icon: '📱', description: 'Engaging social media campaigns' },
              { title: 'Brand Strategy', icon: '🎯', description: 'Comprehensive brand development' },
              { title: 'Content Marketing', icon: '📝', description: 'Strategic content creation' },
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-800 to-purple-900 p-6 rounded-xl border border-purple-600/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      {!loading && campaigns.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Featured <span className="text-purple-400">Campaigns</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl overflow-hidden border border-purple-600/20 hover:border-purple-400/40 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={campaign.imageUrl} 
                      alt={campaign.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{campaign.title}</h3>
                    <p className="text-gray-400 mb-4">{campaign.description}</p>
                    {campaign.showButton && campaign.buttonUrl && (
                      <a
                        href={campaign.buttonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        {campaign.buttonText || 'View Campaign'}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {loading && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400 mx-auto"></div>
            <p className="text-white mt-4">Loading campaigns...</p>
          </div>
        </section>
      )}

      <Footer className="mt-0" />
    </div>
  );
};

export default CreativeMediaPage;