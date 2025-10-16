import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User as FirebaseUser 
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { User } from '../types';

export const signIn = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      unsubscribe();
      if (firebaseUser) {
        // إرجاع المستخدم مباشرة من Firebase Authentication
        resolve({
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          role: 'admin', // كل مستخدم مُصادق عليه يُعتبر admin
          displayName: firebaseUser.displayName || firebaseUser.email || '',
          photoURL: firebaseUser.photoURL || null,
        });
      } else {
        resolve(null);
      }
    });
  });
};

export const isAdmin = async (user: User | null): Promise<boolean> => {
  if (!user) return false;
  return true; // كل مستخدم مُصادق عليه يُعتبر admin
};