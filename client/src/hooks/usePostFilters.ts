import { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
// import { getAllPosts } from '@/api/requests/post'; // Adjust import path if necessary
import { Post } from '@/types/post'; // Adjust import path and type name if necessary

// Define the shape of the filters based on your backend description
export interface PostFilters {
	search?: string;
	tag?: string;
	author?: string;
	startDate?: string; // Recommend using ISO 8601 format (YYYY-MM-DD)
	endDate?: string;   // Recommend using ISO 8601 format (YYYY-MM-DD)
	sort?: string;      // e.g., 'likes', 'comments', '-createdAt' (prefix with '-' for descending)
	page?: number;
	limit?: number;
}

// Define the expected structure of the API response from getAllPosts
// Adjust this based on your actual backend API response structure
export interface PostsApiResponse {
	posts: Post[];         // Or whatever the key for the posts array is
	totalCount: number;    // Total number of posts matching the filters
	totalPages: number;    // Total number of pages
	currentPage: number;   // The current page number
}

// export const usePostFilters = (initialFilters: Partial<PostFilters> = {}) => {
// 	const [filters, setFilters] = useState<PostFilters>({
// 		page: 1,
// 		limit: 10, // Default limit
// 		sort: '-createdAt', // Default sort order
// 		...initialFilters, // Apply any initial filters passed in
// 	});

// 	// Callback to update a specific filter property
// 	const updateFilter = useCallback(
// 		<K extends keyof PostFilters>(key: K, value: PostFilters[K] | '' | null | undefined) => {
// 			// Reset to page 1 when any filter *other than* pagination changes
// 			const shouldResetPage = key !== 'page' && key !== 'limit';

// 			setFilters((prevFilters) => {
// 				const newFilters: PostFilters = { ...prevFilters };

// 				if (value === '' || value === null || value === undefined) {
// 					// If value is empty/null/undefined, remove the filter key
// 					delete newFilters[key];
// 				} else {
// 					// Otherwise, update the filter key - type is now guaranteed by the generic constraint
// 					newFilters[key] = value;
// 				}

// 				// Apply page reset if necessary
// 				if (shouldResetPage) {
// 					newFilters.page = 1;
// 				}

// 				return newFilters;
// 			});
// 		},
// 		[]
// 	);

// 	// Use TanStack Query to fetch posts whenever 'filters' state changes
// 	const queryInfo = useQuery<PostsApiResponse, Error>({
// 		// The query key includes the filters object. TanStack Query uses this
// 		// for caching and automatically refetches when the key changes.
// 		queryKey: ['posts', filters],
// 		// The query function calls your API request function, passing the filters
// 		queryFn: () => getAllPosts(filters),
// 		// keepPreviousData: true, // Optional: shows previous data while fetching new data
// 		// staleTime: 5 * 60 * 1000, // Optional: Data is considered fresh for 5 minutes
// 	});

// 	return {
// 		filters,          // The current state of all filters
// 		updateFilter,     // Function to update a single filter value
// 		setFilters,       // Function to set the entire filter state (use with caution)
// 		posts: queryInfo.data?.posts ?? [], // The fetched posts (or empty array)
// 		totalCount: queryInfo.data?.totalCount ?? 0,
// 		totalPages: queryInfo.data?.totalPages ?? 0,
// 		currentPage: queryInfo.data?.currentPage ?? 1,
// 		isLoading: queryInfo.isLoading,     // True during the initial fetch
// 		isFetching: queryInfo.isFetching,   // True during any fetch (initial or subsequent)
// 		error: queryInfo.error,             // Any error object from the fetch
// 		refetch: queryInfo.refetch,         // Function to manually trigger a refetch
// 	};
// };
