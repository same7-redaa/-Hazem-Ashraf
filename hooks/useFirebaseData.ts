// Hook for Firebase data integration
import { useState, useEffect } from 'react';
import { getFeaturedProjects, getFeaturedCampaigns } from '../services/firebaseService';
import { Project, Campaign } from '../types';
import { PROJECTS } from '../constants';

export const useFirebaseData = () => {
  const [firebaseProjects, setFirebaseProjects] = useState<Project[]>([]);
  const [firebaseCampaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [projects, campaigns] = await Promise.all([
          getFeaturedProjects(),
          getFeaturedCampaigns()
        ]);
        setFirebaseProjects(projects);
        setCampaigns(campaigns);
      } catch (error) {
        console.log('Firebase data not available, using static data');
        // Fallback to static data if Firebase fails
        setFirebaseProjects([]);
        setCampaigns([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Merge Firebase data with static data, prioritizing Firebase if available
  const projects = firebaseProjects.length > 0 ? firebaseProjects : PROJECTS.filter(p => p.featured);
  
  return {
    projects,
    campaigns: firebaseCampaigns,
    loading
  };
};