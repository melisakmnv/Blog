// Based on the backend Mongoose schema

// Assuming you have a User type defined elsewhere, e.g., '@/types/user'
// If not, define a basic structure or import it.
import { User } from '@/types/user'; // Using path alias

// Assuming a Comment type exists, e.g., '@/types/comment'
import { Comment } from '@/types/comment'; // Using path alias

export interface Post {
  _id: string; // MongoDB ObjectId is usually represented as a string
  author: User | string; // Can be populated User object or just the ID string
  title: string;
  slug: string;
  cover: string;
  description: string;
  content: string;
  readingTime: string;
  tag?: string; // Optional based on schema (no required: true)
  likes: (User | string)[]; // Array of User objects or IDs
  savedBy: (User | string)[]; // Array of User objects or IDs
  comments: (Comment | string)[]; // Array of Comment objects or IDs
  createdAt: string; // ISO date string (from timestamps: true)
  updatedAt: string; // ISO date string (from timestamps: true)
}

// You might also want a type for the API response structure if it's consistent
// For example, if your API for a single post returns { post: Post }
// export interface SinglePostApiResponse {
//   post: Post;
// }

// Assuming basic User and Comment types if not defined elsewhere
// You should replace these with your actual User/Comment type definitions

// Example basic User type (replace with actual definition)
// export interface User {
//   _id: string;
//   username: string;
//   // other user fields...
// }

// Example basic Comment type (replace with actual definition)
// export interface Comment {
//   _id: string;
//   text: string;
//   author: User | string;
//   // other comment fields...
// }
