import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { Character, CharactersResponse } from '@/types';
import qs from "query-string";

// contains hooks for characters ... 
// logic is divided into fetch functions on the api folder
// and hooks with react-query in this file

export function useCharacters(filters: Record<string, string>, page: number = 1) {
  const query = qs.stringify({ page, ...filters });

  console.log('query', query);

  return useQuery<CharactersResponse>({
    queryKey: ["characters", page, filters],
    queryFn: () => api.getCharacters(query)
  });
}

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
