// New interface for the author structure within a post
export interface IPostAuthor {
    _id: string;
    firstname: string;
    lastname: string;
    avatar: string;
    username: string;
}

export interface IPost {
    _id: string;
    cover: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    tag: string;
    author: IPostAuthor;
    readingTime: string;
    likes: string[];
    savedBy: string[];
    comments: string[];
    createdAt: string;
    updatedAt: string;
}

export interface IPostsResponse {
    posts: IPost[];
    currentPage: number;
    totalPages: number;
    totalPosts: number;
}

export interface IPostForm {
    // cover: string;
    title: string;
    description: string;
    content: string;
    tag: string;
    author: string;
}
