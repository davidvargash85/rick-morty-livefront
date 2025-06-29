import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { Character } from '@/types';

export const useCharacters = (page: number = 1) => {
  return useQuery({
    queryKey: ['characters', page],
    queryFn: () => api.getCharacters(page),
  });
};

export const useCharacter = (id: string) => {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => api.getCharacter(id),
    enabled: !!id,
  });
};

export const useCharactersByUrls = (urls: string[] = []) => {
  return useQuery<Character[]>({
    queryKey: ['charactersByUrls', urls],
    queryFn: () => api.getCharactersByUrls(urls),
    enabled: urls.length > 0,
  });
};
