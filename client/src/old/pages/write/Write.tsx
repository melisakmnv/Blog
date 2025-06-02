import { useLocation } from 'react-router-dom';

import { PostCreateForm, PostEditForm } from './components/PostForm';

export const Write = () => {

    const { pathname } = useLocation();
    const newstoryPage = pathname === "/new-story"

    return (
        <div className="max-w-3xl mx-auto py-10 px-4 space-y-8">
            <h1 className="text-3xl font-bold text-center">{newstoryPage ? "Create your story" : "Edit your story"} </h1>
            {
                newstoryPage ? (
                    <PostCreateForm />
                ) : (
                    <PostEditForm />
                )
            }
        </div>
    );
}