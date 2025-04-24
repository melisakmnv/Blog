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


