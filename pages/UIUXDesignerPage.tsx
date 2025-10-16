import React, { useState, useEffect } from 'react';
import { ProjectCard, Footer } from '../components/common';
import { getFeaturedProjects } from '../services/firebaseService';
import { Project } from '../types';
import { Palette, Layout, Grid3X3, PenTool } from 'lucide-react';

const UIUXDesignerPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const featuredProjects = await getFeaturedProjects();
        setProjects(featuredProjects.filter(p => p.category === 'UI/UX' || p.category === 'Design'));
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-white">
              Hazem Ashraf
            </a>
            <div className="flex items-center gap-6">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/ui-ux" className="text-emerald-400 font-medium">UI/UX Designer</a>
              <a href="/creative-media" className="text-gray-300 hover:text-white transition-colors">Creative Media</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-stone-900/90"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full">
              <Palette className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent">
            UI/UX Designer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Creating intuitive and beautiful digital experiences that users love
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Layout className="w-5 h-5 text-emerald-400" />
              <span>User Interface Design</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Grid3X3 className="w-5 h-5 text-emerald-400" />
              <span>User Experience</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <PenTool className="w-5 h-5 text-emerald-400" />
              <span>Prototyping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Design <span className="text-emerald-400">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'User Research', icon: '🔍', description: 'Understanding user needs and behaviors' },
              { title: 'Wireframing', icon: '📐', description: 'Creating structural blueprints' },
              { title: 'Visual Design', icon: '🎨', description: 'Crafting beautiful interfaces' },
              { title: 'Prototyping', icon: '⚡', description: 'Interactive design validation' },
            ].map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-xl border border-emerald-600/20 hover:border-emerald-400/40 transition-all duration-300">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {!loading && projects.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Featured <span className="text-emerald-400">Design Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {loading && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-400 mx-auto"></div>
            <p className="text-white mt-4">Loading projects...</p>
          </div>
        </section>
      )}

      <Footer className="mt-0" />
    </div>
  );
};

export default UIUXDesignerPage;