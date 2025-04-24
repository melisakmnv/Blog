import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { PostFilters } from "@/api/requests/post";
import { X } from "lucide-react";
import { useFetchUsers } from "@/hooks/useUser";
import { TAGS } from "@/data/tags";
import { formatName } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

interface PostSidebarProps {
	filters: PostFilters;
	updateFilters: (newFilters: Partial<PostFilters>) => void;
	resetFilters: () => void;
	totalPosts: number;
}

export const PostSidebar = ({ filters, updateFilters, resetFilters, totalPosts }: PostSidebarProps) => {
	const recentActivity = [
		'Commented on "How to use Tailwind"',
		'Liked "Top 10 JavaScript Tricks"',
		'Started following @ux_guru',
	];

	// Local state for search input
	const [searchInput, setSearchInput] = useState(filters.search || '');
	// State to control dialog open/close
	const [dialogOpen, setDialogOpen] = useState(false);

	const { data: users } = useFetchUsers()

	// Maximum number of users to display in the sidebar
	const MAX_VISIBLE_USERS = 3;
	const visibleUsers = users?.slice(0, MAX_VISIBLE_USERS) || [];
	const hasMoreUsers = users && users.length > MAX_VISIBLE_USERS;

	// Handle search form submission
	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		updateFilters({ search: searchInput });
	};

	// Handle sort change
	const handleSortChange = (value: string) => {
		updateFilters({ sort: value });
	};

	// Handle tag selection
	const handleTagSelect = (tag: string) => {
		// If the tag is already selected, remove it
		if (filters.tag === tag) {
			updateFilters({ tag: undefined });
		} else {
			updateFilters({ tag });
		}
	};

	// Handle author selection
	const handleAuthorSelect = (authorId: string) => {
		updateFilters({ author: authorId });
		// Close the dialog when an author is selected
		setDialogOpen(false);
	};

	return (
		// <aside className="w-full max-w-sm p-4 space-y-8 bg-white border">
		<aside className="sticky top-4 h-[calc(100vh-2rem)]">
			<div className="h-full overflow-y-auto p-4 space-y-6 bg-white rounded-2xl shadow-sm">
				{/* Active filters */}
				{(filters.search || filters.tag || filters.author) && (
					<div>
						<div className="flex justify-between items-center mb-2">
							<h2 className="text-lg font-semibold">Active Filters</h2>
							<Button
								variant="ghost"
								size="sm"
								onClick={resetFilters}
								className="text-xs"
							>
								Clear All
							</Button>
						</div>
						<div className="flex flex-wrap gap-2">
							{filters.search && (
								<Badge variant="secondary" className="flex items-center gap-1">
									Search: {filters.search}
									<X
										size={14}
										className="cursor-pointer"
										onClick={() => updateFilters({ search: undefined })}
									/>
								</Badge>
							)}
							{filters.tag && (
								<Badge variant="secondary" className="flex items-center gap-1 cursor-pointer" onClick={() => updateFilters({ tag: undefined })}
								>
									Tag: {filters.tag}
									<X
										size={14}
									/>
								</Badge>
							)}
							{filters.author && (
								<Badge variant="secondary" className="flex items-center gap-1 cursor-pointer" onClick={() => updateFilters({ author: undefined })}>
									By Author
									<X
										size={14}
									/>
								</Badge>
							)}
						</div>
						<p className="text-sm mt-2 text-gray-500">Found {totalPosts} posts</p>
					</div>
				)}

				{/* Search */}
				<div>
					<h2 className="text-lg font-semibold mb-2">Search</h2>
					<form className="flex w-full max-w-sm items-center space-x-2" onSubmit={handleSearch}>
						<Input
							type="text"
							placeholder="Search posts..."
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
						/>
						<Button variant={"outline"} type="submit">Search</Button>
					</form>
				</div>

				{/* Sort */}
				<div>
					<h2 className="text-lg font-semibold mb-2">Sort by</h2>
					<Select
						value={filters.sort}
						onValueChange={handleSortChange}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Choose sorting option..." />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="-createdAt">Newest First</SelectItem>
								<SelectItem value="createdAt">Oldest First</SelectItem>
								<SelectItem value="title">Title A-Z</SelectItem>
								<SelectItem value="-title">Title Z-A</SelectItem>
								<SelectItem value="-readingTime">Longest Read</SelectItem>
								<SelectItem value="readingTime">Shortest Read</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				{/* Tags */}
				<div>
					<h2 className="text-lg font-semibold mb-2">Filter by Topic</h2>
					<div className="flex flex-wrap gap-2 mb-2">
						{TAGS.map((tag) => (
							<Badge
								key={tag}
								className={`cursor-pointer ${filters.tag === tag ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`}
								variant={filters.tag === tag ? "default" : "outline"}
								onClick={() => handleTagSelect(tag)}
							>
								{tag}
							</Badge>
						))}
					</div>
					<Link to={"/"} className="underline text-sm">see more topics</Link>
				</div>

				{/* People to Follow / Filter by Author */}
				<div>
					<h2 className="text-lg font-semibold mb-2">Filter by Author</h2>
					<ul className="space-y-4 mb-2">
						{visibleUsers.map((person) => (
							<li key={person.username} className="flex items-center justify-between">
								<div
									className="flex items-center gap-4 cursor-pointer min-w-2/3"
									onClick={() => handleAuthorSelect(person._id)}
								>
									<Avatar>
										<AvatarImage src={person.avatar} alt="Publisher Avatar" />
										<AvatarFallback>Publisher Avatar</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-medium text-sm">{formatName(person.firstname)} {formatName(person.lastname)}</p>
										<p className="text-xs text-gray-500">{person.username}</p>
									</div>
								</div>
								<Button
									variant={filters.author === person._id ? "default" : "outline"}
									className="text-sm flex-1"
									onClick={() => handleAuthorSelect(person._id)}
								>
									{filters.author === person._id ? 'Selected' : 'View Posts'}
								</Button>
							</li>
						))}
					</ul>
					{hasMoreUsers && (
						<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
							<DialogTrigger asChild>
								<Button variant="link" className="underline text-sm p-0 h-auto font-normal" onClick={() => setDialogOpen(true)}>
									See more authors
								</Button>
							</DialogTrigger>
							<DialogContent className="max-h-[80vh] overflow-y-auto">
								<DialogHeader>
									<DialogTitle>All Authors</DialogTitle>
								</DialogHeader>
								<ul className="space-y-4 mt-4">
									{users?.slice(MAX_VISIBLE_USERS).map((person) => (
										<li key={person.username} className="flex items-center justify-between">
											<div
												className="flex items-center gap-4 cursor-pointer min-w-2/3"
												onClick={() => handleAuthorSelect(person._id)}
											>
												<Avatar>
													<AvatarImage src={person.avatar} alt="Publisher Avatar" />
													<AvatarFallback>Publisher Avatar</AvatarFallback>
												</Avatar>
												<div>
													<p className="font-medium text-sm">{formatName(person.firstname)} {formatName(person.lastname)}</p>
													<p className="text-xs text-gray-500">{person.username}</p>
												</div>
											</div>
											<Button
												variant={filters.author === person._id ? "default" : "outline"}
												className="text-sm flex-1"
												onClick={() => handleAuthorSelect(person._id)}
											>
												{filters.author === person._id ? 'Selected' : 'View Posts'}
											</Button>
										</li>
									))}
								</ul>
							</DialogContent>
						</Dialog>
					)}
				</div>

				{/* Recent Activity */}
				<div>
					<h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
					<ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
						{recentActivity.map((activity, index) => (
							<li key={index}>{activity}</li>
						))}
					</ul>
				</div>
			</div>
		</aside>
	);
};
