import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { Character, CharactersResponse } from '@/types';
import qs from "query-string";

export function useCharacters(page: number, filters: Record<string, string>) {
  const query = qs.stringify({ page, ...filters });

  return useQuery<CharactersResponse>({
    queryKey: ["characters", page, filters],
    queryFn: async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character?${query}`);
      if (!res.ok) throw new Error("Failed to fetch characters");
      return res.json();
    },
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
