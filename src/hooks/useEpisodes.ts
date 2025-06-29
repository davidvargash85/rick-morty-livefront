import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export const useEpisodes = (page: number = 1) => {
  return useQuery({
    queryKey: ['episodes', page],
    queryFn: () => api.getEspisodes(page),
  });
};

export const useEpisode = (id: string) => {
  return useQuery({
    queryKey: ['episode', id],
    queryFn: () => api.getEpisode(id),
    enabled: !!id,
  });
}; 