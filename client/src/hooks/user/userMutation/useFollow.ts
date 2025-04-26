import { followUser } from "@/api/requests/user";
import { IUserSummary } from "@/interfaces/user.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";


type FollowResult = {
  action: 'follow' | 'unfollow';
  message: string;
  id: string;
};

export const useFollowings = (initialFollowings: IUserSummary[]) => {
  const [followings, setFollowings] = useState<IUserSummary[]>(initialFollowings);
  const queryClient = useQueryClient();

  // Follow Mutation
  const followMutation = useMutation<FollowResult, Error, string>({
    mutationFn: async (id) => {
      const data = await followUser(id); // Call API to follow
      return { ...data, id };
    },
    onSuccess: ({ action, id }) => {
      if (action === 'follow') {
      
        queryClient.invalidateQueries({ queryKey: ['user', 'followings'] });
      }
    },


    onError: (error) => {
      console.error('❌ Failed to follow:', error.message);
    },
  });

  // Unfollow Mutation
  const unfollowMutation = useMutation<FollowResult, Error, string>({
    mutationFn: async (id) => {
      const data = await followUser(id); // Call API to unfollow
      return { ...data, id };
    },
    onSuccess: ({ action, id }) => {
      if (action === 'unfollow') {
        setFollowings((prev) => prev.filter((user) => user._id !== id)); // Remove from the list
        queryClient.invalidateQueries({ queryKey: ['user', 'followings'] });
      }
    },
    onError: (error) => {
      console.error('❌ Failed to unfollow:', error.message);
    },
  });

  // Function to handle follow/unfollow toggle
  const toggleFollow = (id: string) => {
    if (followings.some((user) => user._id === id)) {
      // Unfollow if already following
      unfollowMutation.mutate(id);
    } else {
      // Follow if not following
      followMutation.mutate(id);
    }
  };

  return {
    followings,
    toggleFollow,
    isFollowing: (id: string) => followings.some((user) => user._id === id),
    isPending: followMutation.isPending || unfollowMutation.isPending,
    pendingId: followMutation.variables ?? unfollowMutation.variables ?? null,
  };
};