
export interface Project {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  tags?: string[];
  demoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  order?: number;
  showButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  stats?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Campaign {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  tags?: string[];
  campaignUrl?: string;
  featured?: boolean;
  order?: number;
  showButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  uid: string;
  email: string;
  role: 'admin' | 'user';
  displayName?: string;
  photoURL?: string;
}

export interface Service {
  name: string;
  icon?: string;
}

export interface Tool {
  name: string;
  icon?: string;
}
