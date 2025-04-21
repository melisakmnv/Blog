// Defines the structure for a User based on the backend schema
import { Post } from '@/types/post'; // Using path alias

export interface User {
  _id: string; // MongoDB ObjectId
  firstname: string;
  lastname: string;
  email: string;
  // password is intentionally omitted for frontend types - don't send/store passwords in frontend state
  avatar?: string; // Optional based on schema default
  role: 'user' | 'admin';
  savedPosts: (Post | string)[]; // Array of Post objects or IDs
  followings: (User | string)[]; // Array of User objects or IDs
  followers: (User | string)[]; // Array of User objects or IDs
  username?: string; // Optional based on schema
  bio?: string; // Optional based on schema default
  createdAt: string; // Added from assumed timestamps: true in backend schema
  updatedAt: string; // Added from assumed timestamps: true in backend schema
}