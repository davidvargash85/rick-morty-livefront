import { Character, CharactersResponse, Episode, EpisodeResponse } from '@/types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const api = {
  getCharacters: async (page: number = 1): Promise<CharactersResponse> => {
    const response = await fetch(`${BASE_URL}/character?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    return response.json();
  },

  getCharacter: async (id: string): Promise<Character> => {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }
    return response.json();
  },

  getCharactersByUrls: async (urls: string[]): Promise<Character[]> => {
    const ids = urls.map((url) => url.split('/').pop()).join(',');
    const response = await fetch(`${BASE_URL}/character/${ids}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters')
    };
    const data = await response.json();
    return Array.isArray(data) ? data : [data];
  },

  getEspisodes: async (page: number = 1): Promise<EpisodeResponse> => {
    const response = await fetch(`${BASE_URL}/episode?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch episodes');
    }
    return response.json();
  },

  getEpisode: async (id: string): Promise<Episode> => {
    const response = await fetch(`${BASE_URL}/episode/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch episode');
    }
    return response.json();
  },
}; 