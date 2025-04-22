import { useFilteredPosts } from "@/hooks/usePost"
import { memo } from "react";
import { PostSidebar } from "@/components/posts/PostSidebar"
import { PostItemCard } from "@/components/card/PostItemCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Composant de pagination extrait pour éviter les re-renders inutiles
const Pagination = memo(({ 
    currentPage, 
    totalPages, 
    onPageChange 
}: { 
    currentPage: number; 
    totalPages: number; 
    onPageChange: (page: number) => void;
}) => {
    return (
        <div className="flex justify-center items-center space-x-2 mt-6">
            <Button 
                variant="outline" 
                size="sm"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <ChevronLeft size={16} />
                <span className="ml-1">Previous</span>
            </Button>
            
            <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(page => {
                        // Show first page, last page, current page and pages around current
                        return page === 1 || 
                               page === totalPages || 
                               Math.abs(page - currentPage) <= 1;
                    })
                    .map((page, index, array) => {
                        // Add ellipsis when pages are skipped
                        const prevPage = array[index - 1];
                        const showEllipsis = prevPage && page - prevPage > 1;
                        
                        return (
                            <div key={page} className="flex items-center">
                                {showEllipsis && (
                                    <span className="px-2">...</span>
                                )}
                                <Button
                                    variant={page === currentPage ? "default" : "outline"}
                                    size="sm"
                                    className="w-8 h-8 p-0"
                                    onClick={() => onPageChange(page)}
                                >
                                    {page}
                                </Button>
                            </div>
                        );
                    })}
            </div>
            
            <Button 
                variant="outline" 
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <span className="mr-1">Next</span>
                <ChevronRight size={16} />
            </Button>
        </div>
    );
});

// Composant des posts optimisé
const PostsList = memo(({ posts }: { posts: any[] }) => {
    return (
        <div className="space-y-8">
            {posts.map((post) => (
                <PostItemCard post={post} key={post._id} />
            ))}
        </div>
    );
});

export const Posts = () => {
    const { 
        data, 
        filters, 
        updateFilters, 
        resetFilters,
        pagination,
        isLoading,
        isError
    } = useFilteredPosts();
    
    // Extract posts and pagination data
    const posts = data?.posts || [];
    const { currentPage, totalPages, totalPosts } = pagination;

    // Handle pagination
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            updateFilters({ page: newPage });
            
            // Scroll to top of page when changing pages
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <main className="container py-8">
            {/* Header section */}
            <section className="mb-8">
                <h1 className="font-Montserrat font-bold text-2xl mb-4">
                    {filters.search 
                        ? `Search Results for "${filters.search}"` 
                        : filters.tag 
                            ? `Posts tagged with "${filters.tag}"` 
                            : "Featured Posts"}
                </h1>
                {!isLoading && !isError && totalPosts > 0 && (
                    <p className="text-gray-500">
                        Showing {posts.length} of {totalPosts} posts
                    </p>
                )}
            </section>

            {/* Main content */}
            <section>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Posts list */}
                    <div className="lg:flex-2">
                        {isLoading ? (
                            <div className="flex justify-center items-center h-64">
                                <p>Loading posts...</p>
                            </div>
                        ) : isError ? (
                            <div className="flex justify-center items-center h-64">
                                <p className="text-red-500">Error loading posts. Please try again.</p>
                            </div>
                        ) : posts.length === 0 ? (
                            <div className="flex flex-col justify-center items-center h-64 space-y-4">
                                <p className="text-gray-500">No posts found with the current filters.</p>
                                <Button onClick={resetFilters} variant="outline">
                                    Clear All Filters
                                </Button>
                            </div>
                        ) : (
                            <>
                                <PostsList posts={posts} />
                                
                                {/* Pagination controls */}
                                {totalPages > 1 && (
                                    <Pagination 
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                )}
                            </>
                        )}
                    </div>
                    
                    {/* Sidebar */}
                    <div className="lg:flex-1">
                        <PostSidebar 
                            filters={filters} 
                            updateFilters={updateFilters} 
                            resetFilters={resetFilters}
                            totalPosts={totalPosts}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
