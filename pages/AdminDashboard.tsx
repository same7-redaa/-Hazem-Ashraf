import React, { useState, useEffect } from 'react';
import { 
  getProjects, 
  getCampaigns, 
  addProject, 
  addCampaign, 
  updateProject, 
  updateCampaign, 
  deleteProject, 
  deleteCampaign 
} from '../services/firebaseService';
import { signOutUser, getCurrentUser } from '../services/authService';
import { Project, Campaign, User } from '../types';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  LogOut, 
  Eye, 
  EyeOff,
  ArrowUp,
  ArrowDown 
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [activeTab, setActiveTab] = useState<'projects' | 'campaigns'>('projects');
  const [editingItem, setEditingItem] = useState<Project | Campaign | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAdmin = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          await loadData();
        } else {
          // Redirect to login if not authenticated
          window.location.href = '/admin/login';
        }
      } catch (error) {
        console.error('Error initializing admin:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAdmin();
  }, []);

  const loadData = async () => {
    try {
      const [projectsData, campaignsData] = await Promise.all([
        getProjects(),
        getCampaigns()
      ]);
      setProjects(projectsData);
      setCampaigns(campaignsData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOutUser();
      window.location.href = '/admin/login';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSave = async (item: Project | Campaign) => {
    try {
      if (activeTab === 'projects') {
        const project = item as Project;
        if (project.id) {
          await updateProject(project.id, project);
        } else {
          await addProject(project);
        }
      } else {
        const campaign = item as Campaign;
        if (campaign.id) {
          await updateCampaign(campaign.id, campaign);
        } else {
          await addCampaign(campaign);
        }
      }
      await loadData();
      setEditingItem(null);
      setIsAdding(false);
    } catch (error) {
      console.error('Error saving item:', error);
      alert('Error saving item. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    try {
      if (activeTab === 'projects') {
        await deleteProject(id);
      } else {
        await deleteCampaign(id);
      }
      await loadData();
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Error deleting item. Please try again.');
    }
  };

  const ItemForm: React.FC<{ item: Project | Campaign | null, onSave: (item: Project | Campaign) => void, onCancel: () => void }> = ({ item, onSave, onCancel }) => {
    const [formData, setFormData] = useState<Project | Campaign>(
      item || {
        title: '',
        description: '',
        imageUrl: '',
        category: '',
        tags: [],
        featured: false,
        order: 0,
        showButton: false,
        buttonText: '',
        buttonUrl: '',
      }
    );

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <h3 className="text-xl font-bold mb-4">
            {item ? 'Edit' : 'Add'} {activeTab === 'projects' ? 'Project' : 'Campaign'}
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input
                type="text"
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
              <input
                type="text"
                value={formData.tags?.join(', ') || ''}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(', ').filter(Boolean) })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
              <input
                type="number"
                value={formData.order || 0}
                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured || false}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="rounded"
              />
              <label htmlFor="featured" className="text-sm font-medium text-gray-700">Featured</label>
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="showButton"
                checked={formData.showButton || false}
                onChange={(e) => setFormData({ ...formData, showButton: e.target.checked })}
                className="rounded"
              />
              <label htmlFor="showButton" className="text-sm font-medium text-gray-700">Show Button</label>
            </div>
            
            {formData.showButton && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                  <input
                    type="text"
                    value={formData.buttonText || ''}
                    onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Button URL</label>
                  <input
                    type="url"
                    value={formData.buttonUrl || ''}
                    onChange={(e) => setFormData({ ...formData, buttonUrl: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </>
            )}
          </div>
          
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={onCancel}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(formData)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">غير مُصرح</h1>
          <p className="text-gray-600">يجب تسجيل الدخول للوصول إلى لوحة التحكم.</p>
          <button 
            onClick={() => window.location.href = '/admin/login'}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            تسجيل الدخول
          </button>
        </div>
      </div>
    );
  }

  const currentItems = activeTab === 'projects' ? projects : campaigns;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Welcome, {user.displayName || user.email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'projects' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'campaigns' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Campaigns ({campaigns.length})
          </button>
        </div>

        {/* Add Button */}
        <div className="mb-6">
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            <Plus className="w-4 h-4" />
            Add {activeTab === 'projects' ? 'Project' : 'Campaign'}
          </button>
        </div>

        {/* Items Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                  <div className="flex items-center gap-1">
                    {item.featured ? <Eye className="w-4 h-4 text-green-600" /> : <EyeOff className="w-4 h-4 text-gray-400" />}
                    <span className="text-xs text-gray-500">#{item.order}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingItem(item)}
                      className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id!)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {currentItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No {activeTab} found. Add your first one!</p>
          </div>
        )}
      </div>

      {/* Forms */}
      {(isAdding || editingItem) && (
        <ItemForm
          item={editingItem}
          onSave={handleSave}
          onCancel={() => {
            setEditingItem(null);
            setIsAdding(false);
          }}
        />
      )}
    </div>
  );
};

export default AdminDashboard;