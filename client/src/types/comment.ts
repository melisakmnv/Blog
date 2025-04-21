// Defines the structure for a Comment based on the backend schema
import { User } from '@/types/user'; // Using path alias
import { Post } from '@/types/post'; // Using path alias

export interface Comment {
  _id: string; // MongoDB ObjectId
  author: User | string; // Can be populated User object or just the ID string
  post: Post | string;   // Can be populated Post object or just the ID string
  content: string;
  likes: (User | string)[]; // Array of User objects or IDs
  isEdited: boolean;
  createdAt: string; // Added from assumed timestamps: true in backend schema
  updatedAt: string; // Added from assumed timestamps: true in backend schema
}