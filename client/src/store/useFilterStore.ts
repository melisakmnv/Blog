import { create } from 'zustand';
import { PostFilters } from '@/api/requests/post';

interface FilterState {
  filters: PostFilters;
  updateFilters: (newFilters: Partial<PostFilters>) => void;
  resetFilters: () => void;
}

// Default filter values
const defaultFilters: PostFilters = {
  page: 1,
  limit: 10,
  sort: "-createdAt"
};

export const useFilterStore = create<FilterState>((set) => ({
  filters: { ...defaultFilters },
  
  updateFilters: (newFilters: Partial<PostFilters>) => set((state) => {
    // Si on change un autre filtre que "page", on réinitialise page à 1
    if (newFilters.page === undefined) {
      return { 
        filters: { 
          ...state.filters, 
          ...newFilters, 
          page: 1 
        } 
      };
    }
    return { filters: { ...state.filters, ...newFilters } };
  }),
  
  resetFilters: () => set({ filters: { ...defaultFilters } }),
}));
