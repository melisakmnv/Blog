
import { Skeleton } from "../ui/skeleton"


export const ProfileAsideSkeleton = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 p-4 border rounded-lg sticky top-4 h-[calc(100vh-10rem)]">
                <div className="flex-1 space-y-8">
                    {/* Author and date skeleton */}
                    <div className="flex flex-col space-x-2">
                        <Skeleton className="size-24 rounded-full" />
                        <div className="flex flex-col gap-2 mt-4">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-3 w-32" />
                        </div>
                    </div>

                    <div>
                        <Skeleton className="h-9 w-60" />
                    </div>

                    {/* FOLLOWING LIST */}
                    <div className="space-y-4 mt-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <Skeleton className="w-10 h-10 rounded-full" />
                                    {/* Name and username */}
                                    <div className="space-y-1">
                                        <Skeleton className="h-4 w-32" />
                                        <Skeleton className="h-3 w-24" />
                                    </div>
                                </div>
                                {/* Follow button */}
                                <Skeleton className="h-8 w-20 rounded-md" />
                            </div>
                        ))}
                    </div>
                    {/* Footer skeleton */}
                </div>
            </div>
        </div>
    )
}



export const FeaturedPostSkeletons = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-border bg-background flex flex-col">
                    {/* Image */}
                    <Skeleton className="w-full h-[200px]" />

                    {/* Content */}
                    <div className="p-4 space-y-4">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-1/6" />
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center p-4 border-t">
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                        <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                </div>
            ))}
        </div>
    );
};


export const NewestPostSkeleton = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:gap-10">
            {/* Image Skeleton */}
            <div className="flex-1 rounded-md overflow-hidden">
                <Skeleton className="w-full h-64 lg:h-full" />
            </div>

            {/* Right side content */}
            <div className="flex-1 flex flex-col gap-5 py-4">
                {/* Publisher Info */}
                <div className="flex items-center gap-2">
                    <Skeleton className="size-10 rounded-full" />
                    <Skeleton className="h-4 w-32" />
                </div>

                {/* Title */}
                <Skeleton className="h-10 w-3/4" />

                {/* Description (3 lines) */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-2/3" />
                </div>

                {/* Category and Reading Time */}
                <Skeleton className="h-4 w-40" />
            </div>
        </div>
    );
};


export const PostPageSkeleton = () => {
    return (
        <main className="mt-10">
            <div className="w-[90%] md:w-[70%] mx-auto flex flex-col gap-10 md:gap-14 items-center">
                <header className="flex flex-col gap-4 md:gap-6 w-full">
                    <Skeleton className="h-8 md:h-10 w-3/4 mx-auto" />
                    <Skeleton className="h-5 md:h-7 w-2/3 mx-auto" />

                    {/* Author info */}
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-4">
                            <Skeleton className="size-14 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-5 w-40" /> 
                                <Skeleton className="h-4 w-32" />
                            </div>
                        </div>
                    </div>

                    {/* Separator */}
                    <Skeleton className="h-px w-full bg-secondary" />

                    {/* Action bar */}
                    <div className="flex gap-4 w-full py-2">
                        <Skeleton className="h-10 w-24" />
                        <Skeleton className="h-10 w-24" />
                    </div>

                    {/* Separator */}
                    <Skeleton className="h-px w-full bg-secondary" />
                </header>

                {/* Article */}
                <article className="flex flex-col justify-center gap-4 md:gap-8 w-full">
                    {/* Cover Image */}
                    <Skeleton className="w-full h-64 md:h-96 rounded-md" />

                    {/* Content text */}
                    <div className="space-y-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Skeleton key={i} className="h-4 w-full" />
                        ))}
                    </div>
                </article>

                {/* Tag Badge */}
                <Skeleton className="h-8 w-24 rounded-full mt-10" />

                {/* Footer */}
                <footer className="w-full max-w-3xl mx-auto pt-10 border-t">
                    <Skeleton className="h-8 w-48 mb-6" /> {/* Comment title */}

                    {/* Comment form or login text */}
                    <Skeleton className="h-20 w-full mb-6" />

                    {/* Comment Previews */}
                    <section className="space-y-8">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="flex gap-4">
                                <Skeleton className="size-10 rounded-full" />
                                <div className="flex-1 space-y-2">
                                    <Skeleton className="h-4 w-1/2" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-5/6" />
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Show all comments button */}
                    <div className="mt-10">
                        <Skeleton className="h-10 w-40 mx-auto" />
                    </div>
                </footer>
            </div>
        </main>
    );
};
