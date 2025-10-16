import { 
  collection, 
  doc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  where,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';
import { Project, Campaign } from '../types';

// Projects Services
export const getProjects = async (): Promise<Project[]> => {
  try {
    console.log('Attempting to get projects from Firestore...');
    const projectsCollection = collection(db, 'projects');
    
    // Try without orderBy first in case of index issues
    let snapshot;
    try {
      const q = query(projectsCollection, orderBy('order', 'asc'));
      snapshot = await getDocs(q);
    } catch (indexError) {
      console.warn('OrderBy failed, trying without order:', indexError);
      snapshot = await getDocs(projectsCollection);
    }
    
    const projects = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
      };
    }) as Project[];
    
    console.log(`Successfully loaded ${projects.length} projects`);
    return projects;
  } catch (error: any) {
    console.error('Error getting projects:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    // Return empty array if permission error
    if (error.code === 'permission-denied') {
      console.warn('Permission denied. Please update Firestore rules to allow read access.');
    }
    return [];
  }
};

export const getFeaturedProjects = async (): Promise<Project[]> => {
  try {
    const projectsCollection = collection(db, 'projects');
    const q = query(
      projectsCollection, 
      where('featured', '==', true), 
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    })) as Project[];
  } catch (error) {
    console.error('Error getting featured projects:', error);
    return [];
  }
};

export const addProject = async (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  try {
    const projectsCollection = collection(db, 'projects');
    const docRef = await addDoc(projectsCollection, {
      ...project,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  }
};

export const updateProject = async (id: string, project: Partial<Project>): Promise<void> => {
  try {
    const projectDoc = doc(db, 'projects', id);
    await updateDoc(projectDoc, {
      ...project,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

export const deleteProject = async (id: string): Promise<void> => {
  try {
    const projectDoc = doc(db, 'projects', id);
    await deleteDoc(projectDoc);
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

// Campaigns Services
export const getCampaigns = async (): Promise<Campaign[]> => {
  try {
    const campaignsCollection = collection(db, 'campaigns');
    const q = query(campaignsCollection, orderBy('order', 'asc'));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    })) as Campaign[];
  } catch (error) {
    console.error('Error getting campaigns:', error);
    // Return empty array if permission error
    if (error.code === 'permission-denied') {
      console.warn('Permission denied. Please update Firestore rules to allow read access.');
    }
    return [];
  }
};

export const getFeaturedCampaigns = async (): Promise<Campaign[]> => {
  try {
    const campaignsCollection = collection(db, 'campaigns');
    const q = query(
      campaignsCollection, 
      where('featured', '==', true), 
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    })) as Campaign[];
  } catch (error) {
    console.error('Error getting featured campaigns:', error);
    return [];
  }
};

export const addCampaign = async (campaign: Omit<Campaign, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  try {
    const campaignsCollection = collection(db, 'campaigns');
    const docRef = await addDoc(campaignsCollection, {
      ...campaign,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding campaign:', error);
    throw error;
  }
};

export const updateCampaign = async (id: string, campaign: Partial<Campaign>): Promise<void> => {
  try {
    const campaignDoc = doc(db, 'campaigns', id);
    await updateDoc(campaignDoc, {
      ...campaign,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error updating campaign:', error);
    throw error;
  }
};

export const deleteCampaign = async (id: string): Promise<void> => {
  try {
    const campaignDoc = doc(db, 'campaigns', id);
    await deleteDoc(campaignDoc);
  } catch (error) {
    console.error('Error deleting campaign:', error);
    throw error;
  }
};